const Data = require('../filestorage/dataModel');
const path = require('path');

const dataController = {
    async uploadFile(req, res) {

        const file = req.file; 
        const filename = req.file.originalname;

        const success = await Data.saveFile(file, filename);
        if (success) {
            res.status(200).send("File uploaded successfully");
        } else {
            res.status(500).send("Failed to upload file");
        }
    },
    async downloadFile(req, res) {
        const filename = req.params.filename; 
        const filePath = path.join(__dirname, `../data/${filename}.csv`);

        res.sendFile(filePath, (err) => {
            if (err) {
                res.status(404).send('File not found');
            }
        });
    }
};

module.exports = dataController;

