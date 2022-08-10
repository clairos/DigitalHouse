// Uma promise é um objeto que representa um valor a ser retornado no futuro

// Promise tem 3 estados:
// Pending (pendente), Fulfilled (resolvido), Rejected (rejeitado)

const check = new Promise((resolve, reject) => {
    let error = true;

    if(!error) {
        resolve('a promise foi resolvida');
    } else {
        reject('a promise foi rejeitada');
    }
});

console.log(check);

check
    .then(result => console.log(result))
    .catch(error => console.log(error))