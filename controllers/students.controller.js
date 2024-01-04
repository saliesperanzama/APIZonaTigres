const Student = require('../models/student.model');

exports.getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        return res.status(200).json({
            message: 'Estudiantes obtenidos con exito',
            data: students
        });
    } catch (error) {
        return res.status(500).json({
            error: 'Error al obtener estudiantes',
            data:error
        });
    }
}

exports.getStudentById = async (req, res) => {
    const studentId = req.params.studentId;
    try {
        const student = await Student.findById(studentId);
        return res.status(200).json({
            message: 'Estudiante obtenido con exito',
            data: student
        });
    } catch (error) {
        return res.status(500).json({
            error: 'Error al obtener estudiante',
            data: error
        });
    }
}

exports.newStudent = async (req, res) => {
    try{
        const{noControl,email}=req.body;
        const newStudent = new Student({noControl,email});
        await newStudent.save();
        return res.status(201).json({
           message: 'Estudiante creado con exito',
           data: newStudent 
        });
    } catch (error) {
        return res.status(500).json({
            error: 'Error al crear estudiante',
            data: error
        });
    }
}

exports.updateStudent = async (req, res) => {
    const studentId = req.params.studentId;
    const newData = req.body;
    try {
        const updateStudent = await Student.findByIdAndUpdate(studentId, newData, {new: true});
        return res.status(200).json({
            message: 'Estudiante actualizado con exito',
            data: updateStudent
        });
    }catch (error) {
        return res.status(500).json({
            error: 'Error al actualizar estudiante',
            data: error
        });
    }
}

exports.deleteStudent = async (req, res) => {
    const studentId = req.params.studentId;
    try {
        await Student.findByIdAndRemove(studentId);
        return res.status(200).json({
            message: 'Estudiante eliminado con exito'
        });
    }catch (error) {
        return res.status(500).json({
            error: 'Error al eliminar estudiante',
            data: error
        });
    }
}