const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/HomeController');
const ContatoController = require('../controllers/ContatoController');
const MembroController = require('../controllers/MembroController');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/", HomeController.index);
router.get("/contato", ContatoController.index);
router.get("/membros", MembroController.index);

module.exports = router;
