/**
* 后台登陆控制器
*/
var express=require("express");
var session=require("express-session");
var cookieParser = require('cookie-parser');
var router=express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
router.use(cookieParser());
router.use(session({
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: 'shhhh, very secret'
}));
/*界面*/ 
router.get('/',function(req,res,next){
	res.render("admin/login");
});
/*验证*/
 router.post('/',function(req,res,next){
 	req.session.adminId=1;
	if(req.body.password=='taoshihan'){
		
			req.session.adminId=1;
			res.redirect("/admin");
		
	}else{
		res.send("口令错误！");
	}
});
module.exports=router;