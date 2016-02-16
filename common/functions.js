/**
* 公共函数文件
*/
var myFunction={
	phpDate:function(formatStr,time){
		var paramModel='ymdhis';
		if(!formatStr) formatStr="y-m-d h:i:s";
		
		if(time){
			myDateTime=new Date(time*1000);
		}else{
			myDateTime=new Date();
		}
		var strTimeArr=[
			myDateTime.getFullYear().toString(),
			(myDateTime.getMonth()+1).toString(),
			myDateTime.getDate().toString(),
			myDateTime.getHours().toString(),
			myDateTime.getMinutes().toString(),
			myDateTime.getSeconds().toString(),
		];
		for(var i=0;i<strTimeArr.length; i++){
			formatStr=formatStr.replace(paramModel.charAt(i), strTimeArr[i]);                 
		}
		return formatStr;
	},
	D:function(name){
		return require("../model/category");
	}

};
module.exports=myFunction;