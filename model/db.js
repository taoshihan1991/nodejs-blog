/**
* 数据库操作类
*/
var db={
	/*数据库对象*/
	db:null,
	/*配置对象*/
	C:null,
	/*构造函数*/
	getInstances:function(){
		this.connectDatabase();
		return this;
	},
	/*链接数据库*/
	connectDatabase:function(){
		var mysql=require('mysql');
		var C=require("../common/config");
		var db=mysql.createConnection({
			host:C.DB_HOST,
			user:C.DB_USER,
			password:C.DB_PASS,
			database:C.DB_NAME
		});
		db.connect();
		this.db=db;
		this.C=C;
	},
	select:function(tableName,callback,where,field){
		field=field ? field : '*';
		var sql="select "+field+" from "+this.C.DB_PRE+tableName;
		if(where){
			sql+=" where "+where;
		}
		this.db.query(sql,callback);
	}
}
module.exports=db;