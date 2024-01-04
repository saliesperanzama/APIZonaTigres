const Service = require('../models/service.model');

exports.getServices = async (req, res) => {
    try {
        const services = await Service.find();
        return res.status(200).json({
            message: 'Servicios obtenidos con exito',
            data: services
        });
    } catch (error) {
        return res.status(500).json({
            error: 'Error al obtener Servicios',
            data: error
        });
    }
}

exports.getServiceById = async (req, res) => {
    const serviceId = req.params.serviceId;
    try {
        const service = await Service.findById(serviceId);
        return res.status(200).json({
            message: 'Servicio obtenido con exito',
            data: service
        });
    } catch (error) {
        return res.status(500).json({
            error: 'Error al obtener Servicio',
            data: error
        });
    }
}

exports.newService = async (req, res) => {
    try{
        const{nombre, precio,descripcion,telefono,img,vendedor}=req.body;
        const newService = new Service({nombre,precio,descripcion,telefono,img,vendedor});
        await newService.save();
        return res.status(201).json({
            message: 'Servicio creado con exito',
            data: newService
        });
    } catch (error) {
        return res.status(500).json({
            error: 'Error al crear Servicio',
            data: error
        });
    }
}

exports.updateService = async (req, res) => {
    const serviceId=req.params.serviceId;
    const newData=req.body;
    try {
        const updateService = await Service.findByIdAndUpdate(serviceId, newData, {new: true});
        return res.status(200).json({
            message: 'Servicio actualizado con exito',
            data: updateService
        });
    }catch (error) {
        return res.status(500).json({
            error: 'Error al actualizar Servicio',
            data: error
        });
    }
}

exports.deleteService = async (req, res) => {
    const serviceId = req.params.serviceId;
    try {
        await Service.findByIdAndRemove(serviceId);
        return res.status(200).json({
            message: 'Servicio eliminado con exito'
        });
    }catch (error) {
        return res.status(500).json({
            error: 'Error al eliminar Servicio',
            data: error
        });
    }
}