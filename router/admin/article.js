/**
* 文章控制器
*/
var express=require("express");
var router=express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


var getCategory=function(callback){
	global.db.query("select * from category",callback);	
}
//添加界面
router.get("/edit",function(req,res,next){
	getCategory(function(err,categoryList){
		var data={
			categoryList:categoryList
		};
		res.render("admin/article_edit",data);
	});

});

//添加操作
router.post("/save",function(req,res,next){
	var title=req.body.title;
	var content=req.body.content.replace(new RegExp(/\'/g),"\\\'");
	var categoryId=req.body.category_id;
	var timestamp = Date.parse(new Date())/1000;
	var sql="insert into article (title,category_id,content,time)values('"+title+"','"+categoryId+"','"+content+"','"+timestamp+"')";
	console.log(sql);
	global.db.query(sql,function(){
		res.redirect("/admin");
	});
});
module.exports=router;