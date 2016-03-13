/**
* 首页控制器
*/
var router=express.Router();
/*每页条数*/
var pageSize=4;
/*首页*/ 
router.get('/',function(req,res,next){
	var cid=0;
	F.model("article").assignIndexData(cid,1,pageSize,res);
});
/*首页分页*/
router.get('/index/:page',function(req,res,next){
	var currentPage=parseInt(req.params.page);
	var cid=0;
	F.model("article").assignIndexData(cid,currentPage,pageSize,res);
});
/*分类页*/
router.get('/category/:cid/:page',function(req,res,next){
	var cid=req.params.cid;
	var currentPage=parseInt(req.params.page);
	F.model("article").assignIndexData(cid,currentPage,pageSize,res);
}); 
module.exports=router;