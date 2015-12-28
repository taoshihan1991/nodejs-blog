/**
* 文章控制器
*/
var express=require("express");
var router=express.Router();
router.get('/article/:id',function(req,res,next){
	var id=req.params.id;
	global.db.query("select * from article where id="+id,function(err,articleInfo){
		/*分配数据*/
		var data={
			articleInfo:articleInfo[0]
		};
	 	/*渲染模板*/
	 	res.render("home/article",data);		
	});
});
module.exports=router;