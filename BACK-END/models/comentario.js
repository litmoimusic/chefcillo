var mongoose = require('mongoose');

var Schema = mongoose.Schema;



var comentarioSchema = new Schema({
    nombre: { type: String, required: false },
    correo: { type: String, },
    titulo: { type: String, required: false },
    mensaje: { type: String, required: false },
    politica: { type: String, required: false },

}, { collection: 'comentarios' });



module.exports = mongoose.model('Comentario', comentarioSchema);