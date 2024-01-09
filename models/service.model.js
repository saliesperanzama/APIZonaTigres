const mongose = require('mongoose');
//Esquema para el servicio
let serviceSchema = new mongose.Schema({
    nombre: {type:String},
    precio: {type:Number},
    descripcion: {type:String},
    telefono: {type:Number},
    img: {type:String},
    vendedor: {type:String},
    email: {type:String}
});
//Modelo para el servicio y exportarlo
module.exports = mongose.model('Service', serviceSchema, 'service');