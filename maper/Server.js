/*引入express*/ 
global.express=require("express");
var application=express();
application.use(express.static('client'));
/*socket*/ 
var http=require("http").Server(application);
var socketIo=require("socket.io");
var io=socketIo(http);
//主程序
var onlineUsers={};
var onlineCount=0;
var userIndex=0;
io.on("connection",function(socket){
	console.log("有人来了.....");
	//初始化个人
	var userObj={};
	userObj.userId=createUserId();
	socket.name=userObj.userId;
	userIndex++;
	
	//用户登录
	socket.on("login",function(points){
		//判断是否存在
		if(!onlineUsers.hasOwnProperty(userObj.userId)){
			onlineUsers[userObj.userId]=points;
			onlineCount++;
		}
		points.socketId=socket.name;
		io.emit("clientLogin",{onlineUsers:onlineUsers,userId:userObj.userId});
		console.log(userObj.userId+"加入聊天.....");
	});
	
	//用户信息
	socket.on("message",function(mesObj){
		onlineUsers[userObj.userId].mes=mesObj.content;
		io.emit("clientMessage",onlineUsers);
		console.log(mesObj.userId+"说："+mesObj.content);
		onlineUsers[userObj.userId].mes=null;
	});
	//用户退出
	socket.on("disconnect",function(){
		if(onlineUsers.hasOwnProperty(socket.name)){
			delete onlineUsers[socket.name];
			onlineCount--;
			io.emit("clientLoginOut",onlineUsers);
			console.log(socket.name+"退出聊天室");
		}
	})
});

/*创建服务器*/
http.listen(5050,function(){
    console.log("application start ...");
});
function createUserId(){
	return new Date().getTime()+""+Math.floor(Math.random()*899+100);
}