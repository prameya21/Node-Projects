

var express=require("express");
var http=require("http");
var app=express();
var rand=require("./custom_modules/randomInteger.js");
var logger=require("./custom_modules/nodeIndexLogger.js");

app.use(middlewareLogger);
app.use(requestHandler);

function middlewareLogger(req,res,next)
{
	logger(req.url);
	next();
}

http.createServer(app).listen(3000);


function requestHandler(req,res)
{
	res.writeHead(200,{"Content-Type": "text/plain"});
	res.end("Random int generated : " +rand()); 
}
