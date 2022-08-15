var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController');

/* GET users listing. */
router.get('/', UserController.index);
router.get('/:id', UserController.findById);

module.exports = router;