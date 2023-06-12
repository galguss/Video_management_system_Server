const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const app = express();

const update = require('./src/middlewares/upload');
const video_M = require('./src/models/Videos_M');

const ShemaVideo = new video_M();

dotenv.config();

app.use(express.json());
app.use(morgan('dev'));

const port = process.env.PORT || 5757;

app.listen(port, (req, res) => {
    console.log(`The server is running on port ${port}...`)
});

const mySql = require('mysql2');
app.use((req,res,next) => {
    const pool = mySql.createPool({
        connectionLimit: 10,
        host: process.env.HOST,
        user: process.env.USER_DB,
        password: process.env.PASSWORD_DB,
        database: process.env.DATABASE
    });
    req.pool = pool;
    next();
});

app.post('/', update.single('video'), async (req, res) => {
    try {
        const { filename } = req.file;
        const { name, path, abstract } = req.body;
        


    } catch (error) {
        console.log(error);
    }
});



const publicPath = path.join(__dirname, "./public");
app.use(express.static(publicPath));