const fs = require('fs');
let moment = require('moment');
const axios = require('axios').default;

const superHeroes = require('./superHeroes');

let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf8');
let data = moment().format('MMM do YY');

console.log(superHeroes);