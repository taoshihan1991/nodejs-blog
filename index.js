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

/*创建服务器*/
var appPort=process.env.VCAP_APP_PORT || C.APP_PORT;
application.listen(appPort,function(){
    console.log("application start ...");
});