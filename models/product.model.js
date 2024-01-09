const mongose = require('mongoose');
//Esquema para el producto
let productSchema = new mongose.Schema({
    nombre: {type:String},
    precio: {type:Number},
    descripcion: {type:String},
    telefono: {type:Number},
    img: {type:String},
    vendedor: {type:String},
    email: {type:String}
});
//Modelo para el producto y exportarlo
module.exports = mongose.model('Product', productSchema, 'product');