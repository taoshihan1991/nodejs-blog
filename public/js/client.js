var Client={
	url:"ws://localhost:5050",
	socket:null,
	userId:0,
	userName:"",
	//初始化用户
	init:function(){
		var $this=this;
		$this.createSocketClient();
	},
	//创建客户端
	createSocketClient:function(){
		this.socket=io.connect(this.url);
		//通知我登录
		this.socket.emit("login");
		//监听用户登录
		this.socket.on("clientLogin",function(res){
			$this.userName=res.username;
			$this.userId=res.userid;
			var html='<div class="chatLogin"><span class="cirtcle">'+res.username+'上线了</span></div>';
			$('.nbCommentArea').prepend(html);
		});
		this.userSubmitChatMessage();
		this.userGetChatMessage();
		this.userLoginOut();
	},
	//发送聊天
	userSubmitChatMessage:function(){
		$this=this;
		$('.chatMessageBox').keydown(function(e){
			if(e.keyCode==13){
				var content=$(".chatMessageBox").val();
				if(content=='') return;
				var mesObj={
					userId:$this.userId,
					userName:$this.userName,
					content:content
				};
				$this.socket.emit("message",mesObj);
				$(".chatMessageBox").val("");
			}
		});
	},
	//接收聊天
	userGetChatMessage:function(){
		this.socket.on("clientMessage",function(mesObj){
			var html='<div class="chatBox">['+mesObj.time+']['+mesObj.userName+']:'+mesObj.content+'</div>';
			$('.nbCommentArea').prepend(html);
		});
	},
	//用户退出
	userLoginOut:function(){
		this.socket.on("clientLoginOut",function(res){
			var html='<div class="chatLogin"><span class="cirtcle">'+res.username+'退出了</span></div>';
			$('.nbCommentArea').prepend(html);
		});		
	},
}