const Product = require("../model/productModel");

const createProduct = async( req, res ) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};


const getProducts = async ( req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ msg:error.message });
    }
};


const getProduct = async ( req, res ) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json(`No product with id: ${id}`)
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

module.exports = {
    createProduct, getProducts, getProduct,
}