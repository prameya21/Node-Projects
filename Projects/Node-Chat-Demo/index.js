
var app=require("express")();
var server=require('http').Server(app);
var logger=require("morgan");
var path=require("path");

var io=require("socket.io")(server);


app.set("views",path.resolve(__dirname,"views"));
app.set("view engine","ejs");
app.use(logger(":method :url :status :remote-addr :response-time ms"));

app.get("/",function(req,res){
  res.status(200).render("index");
});


io.sockets.on('connection',function(socket){
  socket.on('username',function(username){
    socket.username=username;
    io.emit('is_online', '🔵 <i>' + socket.username + ' join the chat..</i>');
  });

  socket.on('disconnect',function(username){
    io.emit('is_online', '🔴 <i>' + socket.username + ' left the chat..</i>');
  });

  //socket.emit('chat_message','Hello Worldddddddddddddddd');
  socket.on('chat_message',function(message){
    io.emit('chat_message', '<strong>' + socket.username + '</strong>: ' + message);
  });
});

console.log("Server listeniong at port 3000");
server.listen(3000);
