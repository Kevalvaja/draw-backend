const express = require("express");
const controller = require("../controllers/svg-controllers");
const multer = require("multer");
const router = express.Router()

/**  Configure Multer storage settings */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        /** Define the destination folder where uploaded files will be stored */
        cb(null, "./images");
    },
    filename: function (req, file, cb) {
        /**  Define the filename for uploaded files, including a timestamp */
        cb(null, `${file.fieldname}-${Date.now()}${file.originalname}`);
    },
});

/** Create an instance of Multer with the specified storage settings */
const upload = multer({ storage });

router.get('/', controller.getData)
router.get('/:id', controller.getDataById)
router.post('/', upload.single('img'), controller.insertData)
router.put('/:id', upload.single('img'), controller.updateData)
router.delete('/:id', controller.deleteData)

module.exports = router
