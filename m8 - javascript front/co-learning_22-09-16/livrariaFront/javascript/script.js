function createLivro(livro) {
    const newLivro = document.createElement('div');
    const title = document.createElement('h3');
    const pages = document.createElement('p');
    const author = document.createElement('h4');

    title.innerText = livro.title;
    pages.innerText = livro.pages;
    author.innerText = livro.author;

    newLivro.appendChild(title); // adiciona novo elemento no final do elemento
    newLivro.appendChild(pages);
    newLivro.appendChild(author);

    return newLivro;
}

window.onload = function() {
    fetch('http://localhost:3000/api/livros').then(async function(response){
        const livros = await response.json();

        for (const livro of livros) {
            const newLivro = createLivro(livro)
            document.getElementById('livros').appendChild(newLivro);
        }
    })    
}