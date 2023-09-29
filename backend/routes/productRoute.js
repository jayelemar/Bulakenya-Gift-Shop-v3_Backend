const express = require("express");
const Product = require("../model/productModel");
const { createProduct, getProducts, getProduct } = require("../controllers/productController");
const router = express.Router();

router.post("/api/products", createProduct );
router.get("/api/products", getProducts );
router.get("/api/products/:id", getProduct );


module.exports = router