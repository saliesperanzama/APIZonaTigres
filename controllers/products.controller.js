const Product = require('../models/product.model');

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).json({
            message: 'Listado de productos',
            data: products
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener los productos',
            data: error
        });
    }
}

exports.getProductById = async (req, res) => {
    const productId = req.params.productId;
    try {
        const product = await Product.findById(productId);
        return res.status(200).json({
            message: 'Producto encontrado',
            data: product
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener el producto',
            data: error
        });
    }
}

exports.newProduct = async (req, res) => {
    try{
        const{nombre, precio,descripcion,telefono,img,vendedor}=req.body;
        const newProduct = new Product({nombre,precio,descripcion,telefono,img,vendedor});

        await newProduct.save();
        return res.status(200).json({
            message: 'Producto creado con exito',
            data: newProduct
        });
    }catch (error) {
        return res.status(500).json({
            message: 'Error al crear el producto',
            data: error
        });
    }
}

exports.updateProduct = async (req, res) => {
    const productId=req.params.productId;
    const newData=req.body;
    try {
        const updateProduct = await Product.findByIdAndUpdate(productId, newData, {new: true});
        return res.status(200).json({
            message: 'Producto actualizado con exito',
            data: updateProduct
        });
    }catch (error) {
        return res.status(500).json({
            message: 'Error al actualizar el producto',
            data: error
        });
    }
}

exports.deleteProduct = async (req, res) => {
    const productId = req.params.productId;
    try {
        await Product.findByIdAndRemove(productId);
        return res.status(200).json({
            message: 'Producto eliminado con exito'
        });
    }catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar el producto',
            data: error
        });
    }
}