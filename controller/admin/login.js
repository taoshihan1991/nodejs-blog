/**
* 后台登陆控制器
*/
var router=express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
/*界面*/ 
router.get('/',function(req,res,next){
	res.render("admin/login");
});
/*验证*/
 router.post('/',function(req,res,next){
	if(req.body.password=='taoshihan'){
			req.session.adminId=1;
			res.redirect("/admin");
	}else{
		res.send("口令错误！");
	}
});
module.exports=router;