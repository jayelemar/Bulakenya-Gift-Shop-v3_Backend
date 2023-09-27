const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require('./config/connectDB');
const app = express();

connectDB();

app.use(express.json)
app.get('/', (req, res) => {
    res.send("Home page");
})

const Product = require("./model/productModel")

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    })
    .catch(err => console.log(err))










