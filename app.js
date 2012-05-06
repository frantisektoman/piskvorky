
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , piskvorky = require('./piskvorky');

var app = module.exports = express.createServer(),
    io = require('socket.io').listen(app);

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.register('.html', require('ejs'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

//app.get('/', routes.index);
app.get('/', function(req, res){
  res.render('index.html', {title: 'Piškvorky'})
});

//socket.io
io.sockets.on('connection', function(socket){
    var hrac = piskvorky.novyHrac();
    socket.emit('nastavHrace', {
        hrac: hrac,
        naTahu: piskvorky.naTahu()
    });
    socket.on('hra', function(data){
       console.log("hra: " + data.pozice + " hracem " + data.hrac);
       socket.broadcast.emit('hra', data);
       socket.emit('hracNaTahu', piskvorky.dalsiNaTahu());
       socket.broadcast.emit('hracNaTahu', piskvorky.naTahu());
    });
    socket.on('disconnect', function(){
        if(hrac.jmeno != 'posluchac'){
            socket.broadcast.emit('hracOdpojen');
        }
    });
});

//start app
app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
