//Instancias para utilizar express, el enrutador y el controlador
const express=require('express');
const router=express.Router();
const userController=require('../controllers/users.controller.js');
const authMiddleware = require('../utils/auth.middleware');

// authMiddleware.authenticateToken, ya que cree un usuario
router.post('/', userController.registerUser);

router.get('/',userController.getUsers);

router.post('/login',userController.loginUser);

// router.delete('/:userId', userController.deleteUser);

module.exports=router;