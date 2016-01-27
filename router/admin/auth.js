/**
* 验证控制器
*/
var session=require("express-session");
var cookieParser = require('cookie-parser');


var auth=function(router){
	router.use(cookieParser());
	/*验证权限*/ 
	router.use(session({
	  resave: false, // don't save session if unmodified
	  saveUninitialized: false, // don't create session until something stored
	  secret: 'shhhh, very secret'
	}));
	router.use(function(req,res,next){

		console.log(req.session.adminId);
		// if(!req.session.adminId){
		// 	res.redirect("/admin/login");
		// }
		next();
	});	
}

module.exports=auth;