const express = require("express");
const Product = require("../model/productModel");
const { createProduct, getProducts, getProduct, deleteProduct, updateProduct } = require("../controllers/productController");
const router = express.Router();

router.post("/", createProduct );
router.get("/", getProducts );
router.get("/:id", getProduct );
router.delete("/:id", deleteProduct );
router.put("/:id", updateProduct );


module.exports = router