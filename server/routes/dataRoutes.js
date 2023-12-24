const express = require('express');
const multer = require('multer');
const dataController = require('../controllers/dataController');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

router.post('/upload', upload.single('file'), dataController.uploadFile);
router.get('/download/:filename', dataController.downloadFile);

module.exports = router;
