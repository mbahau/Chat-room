var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

// app.get('/', function(req, res){
//   res.send('<h1>Hello world</h1>');
// });

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


//scoket logic
io.on('connection', function(socket){
    console.log('A user is connectted');

    // socket.on('chat message', function(msg){
    //     console.log('message: '+msg);
    // });

    socket.on('disconnect', function(){
        console.log('dissconnected');
    });
});

//io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets
//chat starts
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(5000, function(){
  console.log('listening on *:5000');
});