const express = require('express');
const multer = require('multer')
const app = express();

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "files")
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "_" + Date.now())
        }
    })
}).single("user_file")

app.post('/upload', upload, (req, res) => {
    res.send('Working')
})

app.listen(3000, () => {
    console.log('server running')
})