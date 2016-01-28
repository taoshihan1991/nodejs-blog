/**
* 验证控制器
*/
var auth=function(router){
	/*验证权限*/ 
	router.use(function(req,res,next){
		if(!req.session.adminId){
			res.redirect("/admin/login");
		}
		next();
	});	
}

module.exports=auth;