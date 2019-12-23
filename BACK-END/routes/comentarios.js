/*jshint esversion: 6 */

var express = require('express');
var app = express();

var autenticacionToken = require('../middleWares/autenticacion');

//importar modelo (Comentarios)
var Comentario = require('../models/comentario');


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
                mensaje: 'Get de Comentarios andando',
                ListaComentarios: comentarios
            });

        });

});

/*=================================================
        AGREGAR COMENTARIO ( POST )
=================================================*/
app.post('/', (req, res) => {
    var body = req.body;

    var comentario = new Comentario({
        nombre: body.nombre,
        correo: body.correo,
        titulo: body.titulo,
        mensaje: body.mensaje,
        politica: body.politica,

    });

    comentario.save((error, comentarioCreado) => {

        if (error) return res.status(500).json({
            estadoOk: false,
            mensaje: 'error al crear comentario',
            errores: error
        });

        res.status(200).json({
            estadoOk: true,
            mensaje: 'comentario creado',
            comentarioCreado: comentarioCreado,
            creadoPor: comentario.usuario
        });

    });
});


module.exports = app;