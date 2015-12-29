/**
* 文章控制器
*/
var express=require("express");
var router=express.Router();

/*归档*/
var getArchives=function(callback){
	db.query("select time from article order by time desc",callback);
}

router.get('/article/:id',function(req,res,next){
	var id=req.params.id;
	/*分类*/
	global.db.query("select * from category",function(err,categoryList){
		global.db.query("select * from article where id="+id,function(err,articleInfo){
			getArchives(function(err,allArticleTime){
				var newArticleTime=[];
				for(var i=0;i<allArticleTime.length;i++){
					newArticleTime.push(myFunction.phpDate("y年m月",allArticleTime[i].time));
				}
				/*分配数据*/
				var data={
					articleInfo:articleInfo[0],
					categoryList:categoryList,
					cid:articleInfo[0].category_id,
					allArticleTime:newArticleTime
				};
			 	/*渲染模板*/
			 	res.render("home/article",data);
			});
		
		});
	});
});
module.exports=router;