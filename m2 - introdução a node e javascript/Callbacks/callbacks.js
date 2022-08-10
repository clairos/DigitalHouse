const somar = (nA, nB) => nA + nB;

const sub = (nA, nB) => nA - nB;

const calculadora = (nA, nB, operacao) =>  operacao(nA, nB);

// console.log(calculadora(10, 20, (nA,nB) => nA-nB));

// exercicio url playground teste

function adicionarHttp(url) {
    return "http://" + url;
}

function processar(lista,funcao){
    let retorno = [];

    for(i of lista){
        retorno.push(funcao(i));
    }
    
    return retorno;
}

console.log(processar(['www.google.com', 'www.yahoo.com'], adicionarHttp));

// console.log(calculadora(5,2,sub));