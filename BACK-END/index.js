// REQUIRES
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//IMPORTAR RUTAS
var appRoute = require('./routes/app');
var comentarioRoute = require('./routes/comentarios');
var aporteRoute = require('./routes/jornada')


// CALLS
var app = express();
var server = require('http').Server(app);

//CORS MIDLEWARE
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

//BODY PARSER se debe llamar primero el express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Conexión a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/ChefcilloDB', (err, res) => {
    if (err) throw err;
    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
});


// MIDLEWARES
app.use('/comentario', comentarioRoute);
app.use('/jornada', aporteRoute);
app.use('/', appRoute);


// LISTENERS
server.listen(3000, () => { console.log('puerto 3000:\x1b[33m%s\x1b[0m', 'Online'); });