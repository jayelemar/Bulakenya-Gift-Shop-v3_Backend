const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require('./config/connectDB');
const mongoose = require("mongoose");
const Product = require("./model/productModel");
const productRoutes = require("./routes/productRoute");


const app = express();

connectDB();

app.use(express.json())
app.use(express.urlencoded({ extended:false }));

app.use(cors({
    origin: ["http://localhost:3000", "https://front-end_site.onrender.com"]
}))

app.use("/api/products", productRoutes);



app.get('/', (req, res) => {
    res.send("Home page");
})

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    })
    .catch(err => console.log(err))










