//Instancias para utilizar express, el enrutador y el controlador
const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/services.controller');
const authMiddleware = require('../utils/auth.middleware');

//Obtener todos los servicios
router.get('/', servicesController.getServices);

//Obtener un servicio
router.get('/:serviceId', servicesController.getServiceById);

//Crear un nuevo servicio
router.post('/', authMiddleware.authenticateToken, servicesController.newService);

//Actualizar un servicio
router.put('/:serviceId', authMiddleware.authenticateToken, servicesController.updateService);

//Eliminar un servicio
router.delete('/:serviceId', authMiddleware.authenticateToken, servicesController.deleteService);

//Exportar el enrutador
module.exports = router;