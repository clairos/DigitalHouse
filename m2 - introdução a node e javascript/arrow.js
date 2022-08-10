const somar = (numeroA, numeroB) => { // se tiver somente uma variavel, nao precisa de parenteses
    console.log('recebi o numero: '+ numeroA);
    return numeroA + numeroB
}; // se tiver somente uma linha, nao precisa do return ou de chaves

let horaAtual = () => {
    let data = new Date();
    return data.getHours() + ':' + data.getMinutes();
};

console.log(horaAtual());
// console.log(somar(10,20));