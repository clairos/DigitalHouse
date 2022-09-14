window.addEventListener('load', () => {
    // local storage
    // localStorage.setItem('name-local', 'Maria');
    // se comentar essa linha que cria o nome para name-local, mesmo assim ficará gravado no navegador, mesmo depois de fechar a pagina
    let localName = localStorage.getItem('name-local');

    // session storage
    // sessionStorage.setItem('name-session', 'João');
    // se comentar essa linha que cria o nome para name-session, se fechar a aba nao estara mais salvo no navegador
    // PS: se apenas der reload na pagina continuará ali
    let sessionName = sessionStorage.getItem('name-session');

    // variaveis que apontam para os paragrafos name-local e name-session
    let nameLocal = document.getElementById('name-local');
    let nameSession = document.getElementById('name-session');

    // alterar o HTML dos paragrafos name-local e name-session
    nameLocal.innerHTML += localName;
    nameSession.innerHTML += sessionName;
})