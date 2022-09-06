const form = document.querySelector(".form-auth") // selecionando pela classe

// form.style.display = 'flex';
// form.style.flexFlow = 'column wrap';

form.style.cssText = 'display: flex; flex-flow: column wrap'; // mesma forma que a anterior porem na mesma linha

const inputPrimeiroNome = document.getElementsByName('firstname');

inputPrimeiroNome[0].placeholder = 'Digite seu primeiro nome';

document.body.style.backgroundColor = '#f1f1f1'

const inputs = document.querySelectorAll('input'); // seleciona todos os inputs 
for(let input of inputs){
    input.style.borderRadius = '0.25rem';
}
// 1 rem = pega o fontSize do body -> 16px
// 1em = pega o fontSize do elemento pai

const avatarContent = document.querySelector('.avatar-content > div'); // elemento com o nome do usuario

avatarContent.innerHTML =  '<strong>nome</strong>'; // insere html dentro de algum elemento selecionado
// innerText -> insere texto no corpo do elemento selecionado