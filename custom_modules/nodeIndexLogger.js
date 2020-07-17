
var fs=require("fs");
var fileName="testLogger.txt";

function log(data)
{
	var today=new Date();
	var date=today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	var time=today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
	var time=today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
	data=date+' '+time+'#########'+data+'\n';
	
	fs.appendFile(fileName, data, error);
}


function error(err)
{
	if(err)
		throw err;
	console.log("data Saved");
}


module.exports=log;
