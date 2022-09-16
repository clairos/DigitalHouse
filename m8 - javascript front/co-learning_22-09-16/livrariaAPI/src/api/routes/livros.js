const router = require('express').Router();
const { Livro } = require('../../../models');

router.get('/', async function(req, res){
    res.json(await Livro.findAll());
})

module.exports = router;