// seleciona o form
const form = document.querySelector('form-auth');

// seleciona os inputs
const emailInput = document.querySelector('input[name="email"]');
const nameInput = document.querySelector('input[name="name"]');
const surnameInput = document.querySelector('input[name="surname"]');
const userInput = document.querySelector('input[name="username"]');
const passwordInput = document.querySelector('input[name="password"]');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    // verifica se o value esta preenchido
    if(emailInput.value === ""){
        alert('Preencha o e-mail');
        emailInput.focus();
        return // faz a funcao parar se cair aqui, assim nao roda a funcao inteira
    }

    if(emailInput.value.includes('@')){
        alert('Informe um e-mail válido');
        emailInput.focus();
        return
    }

    if(nameInput.value === ""){
        alert('Preencha o nome');
        nameInput.focus();
        return
    }

    if(surnameInput.value === ""){
        alert('Preencha o sobrenome');
        surnameInput.focus();
        return
    }

    if(passwordInput.value === ""){
        alert('Preencha a senha');
        passwordInput.focus();
        return
    }

    if(passwordInput.length > 8){
        alert('A senha deve conter no mínimo 8 caracteres');
        passwordInput.focus();
        return
    }
});
