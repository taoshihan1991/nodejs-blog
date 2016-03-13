/**
* 文章模型文件
*/
module.exports={
	/*获取条数*/
	getCount:function(categoryId,callback){
		var condition="";
		if(categoryId!=0){
			condition="where category_id="+categoryId;
		}	
		var sql="select count(*) num from article "+condition;
		db.query(sql,callback);
	},
	/*获取分页数据*/
	getArticlePager:function(categoryId,currentPage,pageSize,callback){
		if(currentPage<=0||!currentPage) currentPage=1;
		var start=(currentPage-1)*pageSize;
		var end=pageSize;
		var condition="";
		if(categoryId!=0){
			condition="where category_id="+categoryId;
		}
		var sql="select * from article "+condition+" order by time desc limit "+start+","+end;
		db.query(sql,callback);
	},
	/*归档*/
	getArchives:function(callback){
		db.query("select time from article order by time desc",callback);
	},
	/*分配首页数据*/
	assignIndexData:function(cid,currentPage,pageSize,res){
		var categoryModel=F.model("category");
		var articleModel=this;
		// 分类数据
		categoryModel.getAllList(function(err,categoryList){
			// 文章条数
			articleModel.getCount(cid,function(err,nums){
				// 文章分页
				articleModel.getArticlePager(cid,currentPage,pageSize,function(err,articleList){
					var nextPage=(currentPage+1)>=Math.ceil(nums[0].num/pageSize) ? Math.ceil(nums[0].num/pageSize) : currentPage+1;
					var prePage=(currentPage-1)<=0 ? 1 : currentPage-1;
					// 归档
					articleModel.getArchives(function(err,allArticleTime){
						var newArticleTime=[];
						for(var i=0;i<allArticleTime.length;i++){
							newArticleTime.push(F.phpDate("y年m月",allArticleTime[i].time));
						}
						/*分配数据*/
						var data={
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
			});

		});
	}
};
