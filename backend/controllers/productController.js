const Product = require("../model/productModel");

const createProduct = async( req, res ) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};


const getProducts = async ( req, res) => {
    try {
        const products = await Task.find();
        res.status
    } catch (error) {
        
    }
};