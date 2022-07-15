const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

const Produto = {
    findAll(){
        return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    },

    findOne(id) {
        return this.findAll().find(item => item.id == id);
    },

    findDiscount(products) {
        return products.filter(produto => !!produto.discount).slice(0,4); // msm coisa q (produto => produto.discount !== 0)
    },

    findLastView(products) {
        return products.filter(produto => produto.category == 'visited'); // filtra por category: visited
    },

    save(products) {
        fs.writeFileSync(
            productsFilePath,
            JSON.stringify(products)
        )
    },
    
    update(receivedId, receivedProduct) {
        const products = this.findAll();
        const productUpdate = products.find(item => item.id == receivedId)
        
        Object.assign(productUpdate, receivedProduct);

        this.save(products);

        // processo manual
        // productUpdate.name = receivedProduct.name;
        // productUpdate.description = receivedProduct.description;
        // productUpdate.price = receivedProduct.price;
        // productUpdate.discount = receivedProduct.discount;
        // productUpdate.category = receivedProduct.category;

        // mesmo processo, com spread operator
        // caso newProduct = { ...productUpdate, ...receivedProduct } -> cria um objeto novo
        // neste caso não é viável, pois não altera na lista
    },

    destroy(receivedId) {
        const products = this.findAll();
        this.save(products.filter(item => item.id != receivedId)); // filtra o array original, pega produtos com id diff
    }
}

module.exports = Produto;