let frase = "sou programadora js";

// length
console.log(frase.length); // retorna comprimento em numero, espaço tambem conta como caractere

// indexOf
console.log(frase.indexOf('js')); // retorna o caracter que começa essa palavra
console.log(frase.indexOf('fome')); // se nao tiver, retorna -1

// slice
console.log(frase.slice(4,16)) // traz a parte da string que vc especificar (inicio, fim), fim é opcional
// não modifica a string original

//trim

console.log(frase.trim()); // remove os espaços no começo e no final, não recebe parametros

//split 

console.log(frase.split(' ')); // separa a string em um array 

// replace

console.log(frase.replace('js','html')); // substitui uma parte da string por outra (oQueVaiTrocar, oQueVaiFicar)
// só vai fazer isso para a primeira ocorrência