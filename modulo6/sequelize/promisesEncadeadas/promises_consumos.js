// Consumo de promises - Promises encadeadas
// Objetivos:
// 1- Ler uma base de dados de usuários
// 2- Selecionar os homens adultos

const users = require('./data');

const getUsers = new Promise((resolve, reject) => {
    setTimeout(() => { // os dados só vão ser disparados depois de 2 segundos
        let fetchedUsers = users;
    
        if(fetchedUsers.length > 0){
            resolve(fetchedUsers);
        } else {
            reject('a base de dados está vazia');
        }
    }, 2000); // 2 mil milisegundos = 2 segundos
})

const getMaleUsers = (users) => {
    return new Promise((resolve, reject) => {
        let maleUsers = users.filter(user => {
            if(user.sex === 'male'){
                return user
            } 
        });

        if(maleUsers.length > 0){
            resolve(maleUsers)
        } else {
            reject('não existe usuário do sexo masculino nessa base de dados')
        }
    })
};

const checkAge = (users) => {
    return new Promise((resolve, reject) => {
        let adults = users.filter(user => {
            if(user.age >= 18){
                return user
            }
        });

        if(adults.length > 0){
            resolve(adults)
        } else {
            reject('não há adultos nesta base de usuários')
        }
    })
};

getUsers
    .then(users => getMaleUsers(users))
    .then(maleUsers => checkAge(maleUsers))
    .then(adults => console.log(adults))
    .catch(error => console.log(error))