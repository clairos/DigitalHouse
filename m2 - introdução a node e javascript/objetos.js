let pais = {
    nome:"Brasil",
    capital:"Brasilia",
    falaNacionalidade: function() {
         return "nasci no " + this.nome;
    }
}; // objeto literal

let carro = {
    marca:"Fiat",
    modelo:"Uno"
};

function Carro (valorMarca, valorModelo){
     this.marca = valorMarca;
     this.modelo = valorModelo;
}

//console.log(pais.falaNacionalidade()); // dot notation

console.log(carro);
console.log(new Carro("Renault","Clio"));