// Tarefa assíncrona com Promise

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {  
        const random = Math.random() * 10;

        if(random < 5) resolve('Menor que 5')
        if(random >= 5) reject('Maior ou igual a 5')

    }, 10000) // milisegundos
})

const resultado = promise
    .then((result) => Promise.resolve(result))
    // o resultado de um .then tem que ser outra promise para poder concatenar com outro .then
    .catch((error) => console.log(error))
    .finally((_) => console.log('Terminei!'))

// console.log('O resultado é: ');



// Criar uma promessa que retorne 'olá mundo' e encadear no .then() o
// resultado da promessa com 'novo', resultado esperado: 'Olá mundo novo'

const novaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const print = true;

        if(print) {
            resolve('Olá mundo');
        } else{
            reject('Tchau mundo');
        }
    }, 2000)
})

novaPromise
    .then((resultado) => console.log(resultado + ' novo'))
    .catch((erro) => console.log(erro))



// Tarefas assíncronas com async / await

function geraNumero() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
            const random = Math.random() * 10;
    
            if(random < 5) resolve('Menor que 5')
            if(random >= 5) reject('Maior ou igual a 5')
    
        }, 10000) // milisegundos
    })
}

async function exibeResultado(){
    try {
        const resultado = await geraNumero();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

exibeResultado();



// Criar uma promessa que retorne 'olá mundo' e encadear no .then() o
// resultado da promessa com 'novo', resultado esperado: 'Olá mundo novo'
// Fazer exercício utilizando async e await / try e catch

function novaPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const print = true;
    
            if(print) {
                resolve('Olá mundo');
            } else{
                reject('Tchau mundo');
            }
        }, 2000)
    })
}

async function printResultado() {
    try{
        const novoResultado = await novaPromise();
        console.log(novoResultado + ' novo');
    } catch {
        console.log(error);
    }
}

printResultado();