/**
* 后台首页控制器
*/
var express=require("express");
var session=require("express-session");
var cookieParser = require('cookie-parser');
var router=express.Router();
router.use(cookieParser());
router.use(session({
	secret: '12345',
    name: 'nodejs-blog',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: {maxAge: 8000000 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
    resave: false,
    saveUninitialized: true,
}));

/*登陆*/
router.use("/login",require("./login"));

/*验证权限*/ 
require("./auth")(router);

/*每页条数*/
var pageSize=10;


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

var assignIndexList=function(cid,currentPage,res){
		getCount(cid,function(err,nums){
			getPager(cid,currentPage,function(err,articleList){
				var nextPage=(currentPage+1)>=Math.ceil(nums[0].num/pageSize) ? Math.ceil(nums[0].num/pageSize) : currentPage+1;
				var prePage=(currentPage-1)<=0 ? 1 : currentPage-1;
					/*分配数据*/
					var data={
						articleList:articleList,
						cid:cid,
						nextPage:nextPage==0 ? 1 : nextPage,
						prePage:prePage,
						currentPage:currentPage
					};
					
					/*渲染模板*/
					res.render("admin/index",data);
 				
			});

		})
}






router.get('/',function(req,res,next){
	var currentPage=1;
	assignIndexList(0,currentPage,res);
});

/*首页分页*/
router.get('/index/:page',function(req,res,next){
	var currentPage=parseInt(req.params.page);
	var cid=0;
	assignIndexList(cid,currentPage,res);
});

/*文章*/
var article=require("./article");
router.use("/article",article);

module.exports=router;