const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add a product"]
        },
        description: {
            type: String,
            required: [true, "Please add a product description"]
        },
        category: {
            type: String,
            required: [true, 'Please add a product category']
        },
        price: {
            type: Number,
            required: [true, 'Please add a product price']
        },
        stockQuantity: {
            type: Number,
            required: [true, "Please add a stock quantity"]
        },
        imageURL: {
            type: String,
            required: [true, "Please add an image URL for the product"]
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;