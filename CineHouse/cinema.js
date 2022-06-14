const cinema = 'Arcoplex';

const catalogo =  require('./database/catalogo.json');
// const catalogo = JSON.stringify(catalogo);

function adicionarFilme(codigo, titulo, duracao, atores, anoDeLancamento, emCartaz){
    let filme = {
        codigo:codigo,
        titulo:titulo,
        duracao:duracao,
        atores:atores,
        anoDeLancamento:anoDeLancamento,
        emCartaz:emCartaz
    }
    catalogo.push(filme);
}

function buscarFilme(codigo){
    let numero = catalogo.find(catalogo => catalogo.codigo === codigo);
    return numero;
}

function alterarStatusEmCartaz(codigo){
    for(var i = 0; i <= catalogo.length; i++){
        // let status = [];

        if(catalogo[i].codigo === codigo){
            let status = catalogo[i].emCartaz === true?catalogo[i].emCartaz = false:catalogo[i].emCartaz = true;
            /*if(catalogo[i].emCartaz === false){
                status = catalogo[i].emCartaz = true;
            } else{
                status = catalogo[i].emCartaz = false;
            }

        return catalogo[i];*/
        }

    }
}

function listarTodosOsFilmes(){
    for(var i = 0; i < catalogo.length; i++){
        console.log("Código: " + catalogo[i].codigo + "\nTítulo: " + catalogo[i].titulo + "\nDuração: " +
        catalogo[i].duracao + "\nAtores: " + catalogo[i].atores + "\nAno de lançamento: " + 
        catalogo[i].anoDeLancamento + "\nEstá em cartaz? " + catalogo[i].emCartaz + "\n");
        // console.log(catalogo[i].codigo); dot notation depois do [ ]
    } 
}

function listarFilmesEmCartaz(){
    for(var i = 0; i < catalogo.length; i++){
        if(catalogo[i].emCartaz === true){
            console.log("Código: " + catalogo[i].codigo + "\nTítulo: " + catalogo[i].titulo + "\nDuração: " +
            catalogo[i].duracao + "\nAtores: " + catalogo[i].atores + "\nAno de lançamento: " + 
            catalogo[i].anoDeLancamento + "\n");
        }
    }
}

// adicionarFilme(3, 'eternals', 3, 'angelina jolie', 2021, false);
// console.log(buscarFilme(2));
// alterarStatusEmCartaz(2);

// console.log(alterarStatusEmCartaz(1));

// listarTodosOsFilmes();
alterarStatusEmCartaz(2);
listarFilmesEmCartaz();
// console.log(catalogo);