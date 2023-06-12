const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const fs = require('fs');
const app = express();

const update = require('./src/middlewares/upload');

dotenv.config();

app.use(express.json());
app.use(morgan('dev'));
const publicPath = path.join(__dirname, "./public");
app.use(express.static(publicPath));

const port = process.env.PORT || 5100;

app.listen(port, (req, res) => {
    console.log(`The server is running on port ${port}...`)
});

// ------ Database connection -------
const DB = require('./src/models/db');
const video_M = require('./src/models/Videos_M');
const ShemaVideo = new video_M(DB);

app.get('/', async (req, res) => {
    try {
        const [AllVideos, _] = await ShemaVideo.GetAllVideos();
        res.status(200).json(AllVideos);
    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: "The request failed"
        });
    }
});

app.post('/Add', update.single('video'), async (req, res) => {
    try {
        const { filename } = req.file;
        const { abstract } = req.body;
        const pathFile = `/uploads/${filename}`;
        await ShemaVideo.AddVideo(filename, pathFile, abstract);
        res.status(200).json({
            message: "The video has been successfully added"
        });
    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: "Add failed"
        });
    }
});

app.patch('/Edit',async (req, res) => {
    try {
        const {ID, NAME, ABSTEACT } = req.body;
        await ShemaVideo.UpdateVideo(ID, NAME, ABSTEACT);
        res.status(200).json({
            message: "The video has been successfully updated"
        });
    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: "The update failed"
        });
    }
});

app.delete('/Delete', async (req, res) => {
    try {
        const { ID } = req.body;
        const [fileData, _] = await ShemaVideo.GetVideo(ID);
        const pathFile = path.join(__dirname, "./public", fileData[0].path);
        fs.unlink(pathFile, (err) => {
            if (err) {
              console.error('Error deleting file:', err);
              throw new Error();
            }
          });

         await ShemaVideo.DeleteVideo(ID);
        res.status(200).json({
            message: "The video has been successfully deleted"
        });
    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: "The deletion failed"
        });
    }
});


