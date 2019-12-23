var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var uniqueValidator = require('mongoose-unique-validator');

var aporteSchema = new Schema({
    nombre: { type: String, required: false },
    correo: { type: String, required: false },
    aporte: { type: String, required: false },
    politica: { type: String, required: false },

}, { collection: 'aportes' });


module.exports = mongoose.model('Aporte', aporteSchema);