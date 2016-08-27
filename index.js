/*引入express*/ 
global.express=require("express");
var application=express();

/*载入公共文件,定义资源文件*/
global.C=require("./common/config");
global.F=require("./common/functions"); 
application.use(express.static('public'));

/*模板引擎*/ 
application.set('views',__dirname+'/view');
application.engine('.html',require("ejs").__express);
application.set('view engine','html');

/*链接数据库*/ 
global.db=require("./model/db").getInstances();

/*路由级中间件*/
application.use('/',require('./controller/home/index'));
application.use('/admin',require('./controller/admin/index'));


/*错误处理器*/
application.use(function(err,req,res,next){
  console.error(err.stack);
  res.status(500).send("代码出错了,错误信息:<br/>"+err.stack);
});
/*404*/
application.use(function(req,res,next){
  res.status(404).send("404页面被火星人挖走了");
});

/*socket*/ 
var http=require("http").Server(application);
var socketIo=require("socket.io");
var io=socketIo(http);
//主程序
var onlineUsers={};
var onlineCount=0;
var names=C.NAMES;
var nameIndex=0;
io.on("connection",function(socket){
	console.log("有人来了.....");
	//初始化个人
	var userObj={};
	userObj.userName=names[nameIndex];
	userObj.userId=F.createUserId();
	socket.name=userObj.userId;
	nameIndex++;
	if(nameIndex>=names.length){
		nameIndex=0;
	}
	//用户登录
	socket.on("login",function(){
		//判断是否存在
		if(!onlineUsers.hasOwnProperty(userObj.userId)){
			onlineUsers[userObj.userId]=userObj.userName;
			onlineCount++;
		}
		io.emit("clientLogin",{username:userObj.userName,userid:userObj.userId});
		console.log(userObj.userName+"加入聊天.....");
	});
	//用户信息
	socket.on("message",function(mesObj){
		mesObj['time']=F.phpDate("y年m月d日 h:i:s");
		console.log(mesObj.userName+"说："+mesObj.content);
		io.emit("clientMessage",mesObj);
	});
	//用户退出
	socket.on("disconnect",function(){
		if(onlineUsers.hasOwnProperty(socket.name)){
			var userObj={userId:socket.name,userName:onlineUsers[socket.name]};
			delete onlineUsers[socket.name];
			onlineCount--;
			io.emit("clientLoginOut",{username:userObj.userName});
			console.log(userObj.userName+"退出聊天室");
		}
	})
});

/*创建服务器*/
var appPort=process.env.VCAP_APP_PORT || C.APP_PORT;
http.listen(appPort,function(){
    console.log("application start ...");
});