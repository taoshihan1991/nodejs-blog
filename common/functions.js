/**
* 公共函数文件
*/
module.exports={
	/*模拟php的date()函数*/
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
	/*实例化模型*/
	model:function(name){
		return require("../model/"+name);
	},
	//生成用户唯一id
	createUserId:function(){
		return new Date().getTime()+""+Math.floor(Math.random()*899+100);
	}
};