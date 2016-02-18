/**
* 首页控制器
*/
var express=require("express");
var router=express.Router();

/*每页条数*/
var pageSize=5;


var getPager=function(categoryId,currentPage,callback){
	var start=(currentPage-1)*pageSize;
	var end=pageSize;
	var condition="";
	if(categoryId!=0){
		condition="where category_id="+categoryId;
	}
	var sql="select * from article "+condition+"  order by time desc limit "+start+","+end;
	global.db.query(sql,callback);
}
var getCount=function(categoryId,callback){
	var condition="";
	if(categoryId!=0){
		condition="where category_id="+categoryId;
	}	
	var sql="select count(*) num from article "+condition;
	global.db.query(sql,callback);
}
var getCategory=function(callback){
	myFunction.D("category").getAll(callback);
	//global.db.query("select * from category",callback);	
}
/*归档*/
var getArchives=function(callback){
	db.query("select time from article order by time desc",callback);
}
var assignIndexList=function(cid,currentPage,res){
	/*分类*/
	getCategory(function(err,categoryList){
		getCount(cid,function(err,nums){
			getPager(cid,currentPage,function(err,articleList){
				var nextPage=(currentPage+1)>=Math.ceil(nums[0].num/pageSize) ? Math.ceil(nums[0].num/pageSize) : currentPage+1;
				var prePage=(currentPage-1)<=0 ? 1 : currentPage-1;
				getArchives(function(err,allArticleTime){
					var newArticleTime=[];
					for(var i=0;i<allArticleTime.length;i++){
						newArticleTime.push(myFunction.phpDate("y年m月",allArticleTime[i].time));
					}
					/*分配数据*/
					var data={
						title:'Nodejs-Blog基于Express框架的Blog系统',
						categoryList:categoryList,
						articleList:articleList,
						cid:cid,
						nextPage:nextPage==0 ? 1 : nextPage,
						prePage:prePage,
						allArticleTime:newArticleTime,
						currentPage:currentPage
					};
					
					/*渲染模板*/
					res.render("home/index",data);	
				});
 				
			});

		})

	});	
}
router.get('/',function(req,res,next){
	var currentPage=1;
	var cid=0;
	assignIndexList(cid,currentPage,res);
});
/*首页分页*/
router.get('/index/:page',function(req,res,next){
	var currentPage=parseInt(req.params.page);
	var cid=0;
	assignIndexList(cid,currentPage,res);
});
/*分类列表*/
router.get('/category/:cid/:page',function(req,res,next){
	var cid=req.params.cid;
	var currentPage=parseInt(req.params.page);
	assignIndexList(cid,currentPage,res);
});

module.exports=router;