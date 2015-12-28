/**
* 首页控制器
*/
var express=require("express");
var router=express.Router();
router.get('/',function(req,res,next){
	/*分类*/
	global.db.query("select * from category",function(err,categoryList){
		global.db.query("select * from article",function(err,articleList){
			/*分配数据*/
			var data={
				title:'nodejs blog',
				categoryList:categoryList,
				articleList:articleList
			};
			console.log(data);
			/*渲染模板*/
			res.render("home/index",data);	
		});
	});


		
});
module.exports=router;