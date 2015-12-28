/**
* 文章控制器
*/
var express=require("express");
var router=express.Router();
router.get('/article/:id',function(req,res,next){
	var id=req.params.id;
	/*分类*/
	global.db.query("select * from category",function(err,categoryList){
		global.db.query("select * from article where id="+id,function(err,articleInfo){
			/*分配数据*/
			var data={
				articleInfo:articleInfo[0],
				categoryList:categoryList,
				cid:articleInfo[0].category_id
			};
		 	/*渲染模板*/
		 	res.render("home/article",data);		
		});
	});
});
module.exports=router;