var express=require("express");
var app=express();
/*模板引擎*/
app.set('views',__dirname+'/views');
app.engine('.html',require("ejs").__express);
app.set('view engine','html');

/*链接数据库*/
var mysql=require('mysql');
var db=mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	database:'blog'
});
db.connect();
global.db=db;
/*静态文件*/
app.use(express.static('public'));

/*公共函数文件*/
global.myFunction=require("./router/common/functions");

/*路由级中间件*/
var home=require('./router/home/index');
app.use('/',home);
// var article=require('./router/home/article');
// app.use('/',article);
var admin=require('./router/admin/index');
app.use('/admin',admin);

/*错误处理器*/
app.use(function(err,req,res,next){
	console.error(err.stack);
	res.status(500).send("傻狍子代码出错了,错误信息:<br/>"+err.stack);
});
/*404*/
app.use(function(req,res,next){
	res.status(404).send("404页面被火星人挖走了");
});
/*创建服务器*/
var server=app.listen(8888,function(){
	console.log("start...");
});