const multer = require('multer')

const uploadImgaesSingle = () => {
    // setup url save file
    const storage = multer.diskStorage({
        destination: function (req, res, cb) {
            cb(null, './public/images') // url save file
        },
        filename: function (req, file, cb) {
            cb(null, `${Date.now()}_${file.originalname}`) // set name random file
        }
    })

    const upload = multer({
        storage,
        fileFilter: function (req, file, cb) {
            const filetypes = /jpeg|jpg|png|gif/;
            const mineTypes = filetypes.test(file.mimetype)
            if (mineTypes) {
                cb(null, true)
            } else {
                cb(new Error("Extension Not Available"))
            }
        }
    })

    return upload.single("avatar")
}

const uploadImagesArray = () => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './public/allbums')
        },
        filename: function (req, file, cb) {
            cb(null, `${Date.now()}_${file.originalname}`)
        }
    })

    const upload = multer({
        storage,
        fileFilter: function (req, file, cb) {
            const fileTypes = /jpeg|jpg|png|gif/;
            const mineTypes = fileTypes.test(file.mimetype)
            if (mineTypes) {
                cb(null, true)
            } else {
                cb(new Error("Extension Not Available"))
            }
        }
    })

    return upload.array("allbums", 10)
}
module.exports = {
    uploadImgaesSingle,
    uploadImagesArray
}