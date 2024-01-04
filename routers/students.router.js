//Instancias para utilizar express, el enrutador y el controlador
const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/students.controller');
const authMiddleware = require('../utils/auth.middleware');

//Obtener todos los estudiantes
router.get('/', studentsController.getStudents);

//Obtener un estudiante
router.get('/:studentId', studentsController.getStudentById);

//Crear un nuevo estudiante
router.post('/',authMiddleware.authenticateToken, studentsController.newStudent);

//Actualizar un estudiante
router.put('/:studentId',authMiddleware.authenticateToken, studentsController.updateStudent);

//Eliminar un estudiante
router.delete('/:studentId',authMiddleware.authenticateToken, studentsController.deleteStudent);

//Exportar el enrutador
module.exports = router;