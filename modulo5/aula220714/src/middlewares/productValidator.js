const { check } = require('express-validator');

const validator = [
    check('name').notEmpty().withMessage('Campo "Nome do Produto" é obrigatório!'),
    check('price').notEmpty().withMessage('Campo "Preço do Produto" é obrigatório!')
]

module.exports = validator;