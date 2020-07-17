
var http=require("http");
var path=require("path");
var express=require("express");
var logger=require("morgan");
var bodyParser=require("body-parser");

//port=process.argv[2];

var app=express();
var entries=[]

app.set("views", path.resolve(__dirname,"views"));
app.set("view engine", "ejs");

app.locals.entries=entries;

app.use(logger("dev"));

app.use(bodyParser.urlencoded({extended:false}));

app.get("/", function(req,res){
	res.render("index");
});

app.get("/new-entry", function(req,res){
	res.render("new-entry");
});

app.post("/new-entry", function(req,res){
	if(!req.body.title || !req.body.body){
		res.status(400).send("Entries must have a valid title and body.");
		return;
	}
	entries.push({
		title:req.body.title,
		body:req.body.body,
		published: new Date()
	});
	res.redirect("/");
});

app.use(function(res,res){
	res.status(400).render("404");
});

http.createServer(app).listen(3000,function(){
	console.log("Guestbook app started on port 3000");
});
