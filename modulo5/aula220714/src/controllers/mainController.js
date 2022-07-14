const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		const discounts = products.filter(produto => !!produto.discount) // msm coisa q (produto => produto.discount !== 0)
		const productsLastView = products.slice(4, 8); // pega os 5 primeiros produtos
		res.render('index', { discounts, productsLastView }); // segundo parametro serve para acessar as info dentro da view
	},

	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
