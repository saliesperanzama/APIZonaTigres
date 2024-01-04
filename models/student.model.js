const mongose = require('mongoose');
//Esquema para el estudiante
let studentSchema = new mongose.Schema({
    noControl: {type: Number, required: true},
    email: {type: String, required: true}
});
//Modelo para el estudiante y exportarlo
module.exports = mongose.model('Student', studentSchema, 'student');
