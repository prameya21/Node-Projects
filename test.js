var fs = require("fs");
var http = require("http");
var url = require("url");


http.createServer(serve).listen(8080);

console.log("Listening to server on 8080...");


function getProjects()
{
	
}



function serve(request, response)
{
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    response.writeHead(200);

    if(pathname == "/") 
    {
		html = fs.readFileSync("index.html", "utf8");
        response.write(html);
    }
    else if(pathname == "/getProjects")
    {
		data=getProjects();
	}
	else
    {
		path=pathname.substring(1);
		if(path.includes('favicon'))
			return;
		script=fs.readFileSync(path,"utf8");
		response.write(script);
	}
    response.end();
}


































    /*else if (pathname == "/js/scripts.js") {
        script = fs.readFileSync("js/scripts.js", "utf8");
        console.log(script);
        response.write(script);
    }*/
