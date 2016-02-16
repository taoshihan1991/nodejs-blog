/**
* 数据库操作类
*/
var db=require("../model/db").getInstances();
module.exports={
	/*数据库对象*/
	getAll:function(callback){
		db.select("category",callback);
	}
}