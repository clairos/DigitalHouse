const multer = require('multer');

// ************ MULTER CONFIG *****************
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null,__dirname + '../../../public/images/products');
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + '-' + file.originalname);
    }
}); // configuracao padrao para o multer

const upload = multer({ storage });

module.exports = upload;