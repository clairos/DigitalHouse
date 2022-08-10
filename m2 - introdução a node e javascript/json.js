let pessoa = {
    nome:"vinicius",
    idade:21,
    altura: 1.59
}

let json = JSON.stringify(pessoa);

let objetoDeNovo = JSON.parse(json);

console.log(json);