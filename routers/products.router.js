//Instancias para utilizar express, el enrutador y el controlador
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.controller');
const authMiddleware = require('../utils/auth.middleware');

//Ruta para obtener todos los productos
router.get('/', productsController.getProducts);

//Obtener un producto
router.get('/:productId', productsController.getProductById);

//Crear un nuevo producto
router.post('/', authMiddleware.authenticateToken, productsController.newProduct);

//Actualizar un producto
router.put('/:productId', authMiddleware.authenticateToken, productsController.updateProduct);

//Eliminar un producto
router.delete('/:productId', authMiddleware.authenticateToken, productsController.deleteProduct);

//Exportar el enrutador
module.exports = router;