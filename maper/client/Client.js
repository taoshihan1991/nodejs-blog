var Client={
	url:"ws://localhost:5050",
	socket:null,
	userId:0,
	//初始化用户
	init:function(){
		var $this=this;
		$this.createSocketClient();
	},
	//创建客户端
	createSocketClient:function(){
		var _this=this;
		this.socket=io.connect(this.url);
		//通知我登录
		Geolocation.getCurrentPosition(function(lng,lat){
			_this.socket.emit("login",{lng:lng,lat:lat});
		});
		
		//监听用户登录
		this.socket.on("clientLogin",function(res){
			var onlineUsers=res.onlineUsers;
			if(!_this.userId){
				_this.userId=res.userId;
			}
			Geolocation.removePoints();
			var index=0;
			var length=Object.keys(onlineUsers).length;
			for(var id in onlineUsers){
				index++;
				if(index==length){
					Geolocation.addPointToMap(onlineUsers[id].lng,onlineUsers[id].lat,'Hello every one!');
				}else{
					Geolocation.addPointToMap(onlineUsers[id].lng,onlineUsers[id].lat);
				}
				
			}
		});
		
		this.userSubmitChatMessage();
		this.userGetChatMessage();
		this.userLoginOut();
	},
	//发送聊天
	userSubmitChatMessage:function(){
		var _this=this;
		$('#chatBtn').keydown(function(e){
			if(e.keyCode==13){
				var content=$("#chatBtn").val();
				var mesObj={
					userId:_this.userId,
					content:content
				};
				_this.socket.emit("message",mesObj);
				$("#chatBtn").val("");
			}
		});
	},
	//接收聊天
	userGetChatMessage:function(){
		this.socket.on("clientMessage",function(onlineUsers){
			Geolocation.removePoints();
			for(var id in onlineUsers){
				if(onlineUsers[id].mes){
					Geolocation.addPointToMap(onlineUsers[id].lng,onlineUsers[id].lat,onlineUsers[id].mes);
				}else{
					Geolocation.addPointToMap(onlineUsers[id].lng,onlineUsers[id].lat);
				}
			}
		});
	},
	//用户退出
	userLoginOut:function(){
		$this=this;
		this.socket.on("clientLoginOut",function(onlineUsers){
			Geolocation.removePoints();
			for(var id in onlineUsers){
				Geolocation.addPointToMap(onlineUsers[id].lng,onlineUsers[id].lat);
			}
		});		
	},
	getCookie:function (name){
		var strCookie=document.cookie;
		var arrCookie=strCookie.split("; ");
		for(var i=0;i<arrCookie.length;i++){
		var arr=arrCookie[i].split("=");
		if(arr[0]==name)return arr[1];
		}
		return "";
	}
}