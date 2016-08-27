/**
* 数据库操作类
*/
var db={
	/*数据库对象*/
	db:null,
	/*构造函数*/
	getInstances:function(){
		this.connectDatabase();
		return this;
	},
	/*链接数据库*/
	connectDatabase:function(){
		var mysql=require('mysql');
		var db=mysql.createConnection({
			host     : process.env.MYSQL_HOST,
		    port     : process.env.MYSQL_PORT,
		    user     : process.env.ACCESSKEY,
		    password : process.env.SECRETKEY,
		    database : 'app_' + process.env.APPNAME
		});
		db.connect();
		this.db=db;
	},
	/*查询*/ 
	select:function(tableName,callback,where,field){
		field=field ? field : '*';
		var sql="select "+field+" from "+C.DB_PRE+tableName;
		if(where){
			sql+=" where "+where;
		}
		console.log(sql);
		this.db.query(sql,callback);
	},
	/*添加*/
	add:function(tableName,tableData,callback){
 		var sql="insert into "+C.DB_PRE+tableName;
 		var clumn='';
 		var value='';
 		for(var key in tableData){
   			clumn+=","+key;
   			value+=",'"+tableData[key]+"'";
  		}
 		clumns="("+clumn.substr(1)+")";
		values="("+value.substr(1)+")";
		sql=sql+clumns+"values"+values;
		console.log(sql);
		this.db.query(sql,callback);		
	},
	/*修改*/
	update:function(tableName,tableData,where,callback){
 		var sql="update "+C.DB_PRE+tableName+" set ";
 		var clumns="";
 		for(var key in tableData){
   			clumns+=","+key+"='"+tableData[key]+"'";
  		}
		clumns=clumns.substr(1);

		sql+=clumns+" where "+where;
		console.log(sql);
		this.db.query(sql,callback);		
	},
	/*删除*/
	delete:function(tableName,where,callback){
 		var sql="delete from "+C.DB_PRE+tableName+" where "+where;
		console.log(sql);
		this.db.query(sql,callback);		
	},
	/*执行sql*/
	query:function(sql,callback){
		console.log(sql);
		this.db.query(sql,callback);		
	}
}
module.exports=db;