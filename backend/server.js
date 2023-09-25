const dotenv = require("dotenv").config();

const express = require("express");
const connectDB = require('./config/connectDB');
const app = express();

connectDB();

app.get('/', (req, res) => {
    res.send("Home page");
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
