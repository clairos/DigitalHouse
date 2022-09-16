const router = require('express').Router();
const livrosRouter = require('./livros');

router.use('/livros', livrosRouter);

module.exports = router;