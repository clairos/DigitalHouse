// seleciona o form
const form = document.querySelector('.form-auth');

// seleciona os inputs
const emailInput = document.querySelector('input[name="email"]');
const nameInput = document.querySelector('input[name="name"]');
const surnameInput = document.querySelector('input[name="surname"]');
const userInput = document.querySelector('input[name="username"]');
const passwordInput = document.querySelector('input[name="password"]');
const nomeUsuario = document.querySelector('.avatar-content > b');

nomeUsuario.textContent = localStorage.getItem('username');

let erros = [];
// const erros = [];

form.addEventListener('submit', function(event) { // não usar arrow function!!!
    erros = [];
    // erros.length = 0;
    
    document.querySelectorAll('small.erro').forEach(erro => {
        erro.innerHTML = '';
    })
    
    event.preventDefault();

    // verifica se o value esta preenchido
    if(emailInput.value === ""){
        erros.push({ name: emailInput.name, message: 'Preencha o e-mail' });
        emailInput.focus(); // faz a funcao parar se cair aqui, assim nao roda a funcao inteira
    }

    if(!emailInput.value.includes('@')){
        erros.push({ name: emailInput.name, message: 'Informe um e-mail válido' });
        emailInput.focus();
    }

    if(nameInput.value === ""){
        erros.push({ name: nameInput.name, message: 'Preencha o nome' });
        nameInput.focus();
    }

    if(surnameInput.value === ""){
        erros.push({ name: surnameInput.name, message: 'Preencha o sobrenome' });
        surnameInput.focus();
    }

    if(userInput.value === ""){
        erros.push({ name: userInput.name, message: 'Preencha o usuário' });
        userInput.focus();
    }

    if(passwordInput.value === ""){
        erros.push({ name: passwordInput.name, message: 'Preencha a senha' });
        passwordInput.focus();
    }

    if(passwordInput.value.length > 8){
        erros.push({ name: passwordInput.name, message: 'A senha deve conter no mínimo 8 caracteres' });
        passwordInput.focus();
    }

    // o forEach percorre todo o array
    // o for normal i=0; i<5; i++, tem controle melhor da iteração

    // o forEach tem um callback que recebe o item atual da iteração
    // seria a mesma coisa que erros[i]
    erros.forEach(erro => {
        document.getElementById(erro.name).innerHTML = erro.message;
    })

    if(erros.length === 0){
        fetch('https://brunorazera-digitalhous-0p3a6tnqzqg.ws-us65.gitpod.io/users', {
            mode: 'no-cors',
            method: 'POST',
            body: JSON.stringify( {
                name: nameInput.value,
                surname: surnameInput.value,
                username: userInput.value,
                email: emailInput.value,
                password: passwordInput.value
            })
        })
        .then(response => {
            return response.json()
        }).then(user => {
            localStorage.setItem('user', user.username)
            window.location.href = feed.html
        }).catch(erro => {
            alert(erro);
        })
    }
});
