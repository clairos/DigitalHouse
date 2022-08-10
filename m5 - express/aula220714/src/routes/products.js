// ************ Require's ************
const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const productValidator = require ('../middlewares/productValidator');

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index);

/*** CREATE ONE PRODUCT ***/ 
router.get('/create/', productsController.create);
router.post('/create/', upload.single('image'), productValidator, productsController.store);
                            // array([]) -> varios arquivos
                                              // função ja usa o next

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail);

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); // /produtos/edit/21
                                                  // /recurso /acao/item
router.put('/edit/:id', productsController.update);

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy);

module.exports = router;