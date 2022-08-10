// spread operator em array

let frutas = ["maçã", "bergamota", "uva"];

let frutasDois = ["laranja", "tomate", "limão"];

let listaCompleta = [...frutas, ...frutasDois];
// console.log(listaCompleta);

// spread operator em objeto
let pessoa = {
    nome: "clara",
    idade: 20
}

let infoPessoal = {
    numero: 49999024915,
    rg: 64294924,
    ...pessoa
}
// console.log(infoPessoal);

// rest parameter em função
function letras(...paramns){
    console.log(paramns[1]);
}

letras("a", "b");