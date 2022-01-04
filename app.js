const express = require('express');
const multer = require('multer'); 
const upload = multer({ storage: multer.memoryStorage() });

const app = express();

function handleFileMeta(req, res, next) {
    const file = req.file;

    const name = file.originalname;
    const type = file.mimetype;
    const size = file.size;

    res.json({
        name,
        type,
        size
    })

}

app.route('/api/fileanalyse')
    .post(upload.single('upfile'), handleFileMeta);

module.exports = app;