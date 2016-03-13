/**
* 文章控制器
*/
var express=require("express");
var router=express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/*验证权限*/ 
require("./auth")(router);

var getCategory=function(callback){
	global.db.query("select * from category",callback);	
}
//添加界面
router.get("/edit",function(req,res,next){
	getCategory(function(err,categoryList){
		var data={
			categoryList:categoryList
		};
		res.render("admin/article_add",data);
	});

});

//编辑界面
router.get("/edit/:id",function(req,res,next){
	var id=req.params.id;

	getCategory(function(err,categoryList){
		var sql="select * from article where id="+id;
		global.db.query(sql,function(err,articleInfo){
			//res.send(articleInfo);
			var data={
				categoryList:categoryList,
				articleInfo:articleInfo[0]
			};
			res.render("admin/article_edit",data);
		});

	});

});

//添加操作
router.post("/save",function(req,res,next){
	var title=req.body.title;
	var content=req.body.content.replace(new RegExp(/\'/g),"\\\'");
	var categoryId=req.body.category_id;
	var timestamp = Date.parse(new Date())/1000;
	var id=req.body.id;
	if(id=="0"){
		var sql="insert into article (title,category_id,content,time)values('"+title+"','"+categoryId+"','"+content+"','"+timestamp+"')";
		global.db.query(sql,function(){
			res.redirect("/admin");
		});

	}else{
		var sql="update article set title='"+title+"',category_id='"+categoryId+"',content='"+content+"' where id="+id;
		global.db.query(sql,function(){
			res.redirect("/admin/article/edit/"+id);
		});
	
	}
});

//删除
router.get("/del/:id",function(req,res,next){
	var id=req.params.id;
	var sql="delete from article where id="+id;
	global.db.query(sql,function(err,data){
		res.redirect("/admin");
	});
})
module.exports=router;