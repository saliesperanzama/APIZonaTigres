const mongoose = require('mongoose');
//Esquema para el usuario
const userSchema = new mongoose.Schema({
    userName: {type: String, required:true},
    noControl: {type: Number, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
});
//Modelo para el usuario
const User=mongoose.model('User', userSchema, 'user')
//Exportar el modelo
module.exports=User;