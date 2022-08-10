const express = require('express');
const ProdutoController = require('../controllers/ProdutoController');

const router = express.Router();

// router.get('/criar', (req, res)=>res.send("Criando um produto"));
router.get('/criar', ProdutoController.criarProduto);
router.get('/deletar/:id', ProdutoController.deletarProduto);

module.exports = router;