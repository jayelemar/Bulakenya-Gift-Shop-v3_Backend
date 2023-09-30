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
        console.log(`Product found: ${product}`);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const deleteProduct = async ( req, res ) => {
    try {
        const { id } = req.params;
        console.log(`Deleting product with ID: ${id}`);
        const product = await Product.findByIdAndDelete(id);
        console.log(`Deleted product: ${product}`);
        if(!product) {
            console.log(`No product found with ID: ${id}`);
            return res.status(404).json(`No product with id: ${id}`)
        }
        res.status(200).send("product deleted")
    } catch (error) {
        console.error(`Error while deleting product: ${error.message}`);
        res.status(500).json({ msg: error.message });
    }
};

const updateProduct = async ( req, res ) => {
    try {
        const { id } = req.params;
        console.log(`Updating product with ID: ${id}`);
        console.log("Request Body:", req.body);
        const product = await Product.findByIdAndUpdate(
            { _id: id },
            req.body,
            { new: true },
        );
        console.log("Updated Product:", product);
        res.status(200).json(product);
    } catch (error) {
        console.error(`Error while updating product: ${error.message}`);
        res.status(500).json({ msg: error.message });
    }
};

module.exports = {
    createProduct, getProducts, getProduct, deleteProduct, updateProduct
}