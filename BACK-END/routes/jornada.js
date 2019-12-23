/*jshint esversion: 6 */

var express = require('express');
var app = express();


//importar modelo (Comentarios)
var Jornada = require('../models/jornada');


/*=================================================
        OBTENER LISTA DE COMENTARIOS ( GET )
=================================================*/
app.get('/', (request, response) => {
    var desde = request.query.desde || 0;
    desde = Number(desde);

    Comentario.find({}).limit(5).skip(desde).populate().exec(
        (error, comentarios) => {
            if (error) return error;
            response.status(200).json({
                PeticionOK: true,
                mensaje: 'Get de aportes andando',
                ListaComentarios: comentarios
            });

        });

});

/*=================================================
        AGREGAR COMENTARIO ( POST )
=================================================*/
app.post('/', (req, res) => {
    var body = req.body;

    var jornada = new Jornada({
        nombre: body.nombre,
        correo: body.correo,
        aporte: body.aporte,
        politica: body.politica,
    });

    jornada.save((error, comentarioCreado) => {

        if (error) return res.status(500).json({
            estadoOk: false,
            mensaje: 'error al crear comentario',
            errores: error
        });

        res.status(200).json({
            estadoOk: true,
            mensaje: 'comentario creado',
            comentarioCreado: comentarioCreado,
        });

    });
});


module.exports = app;