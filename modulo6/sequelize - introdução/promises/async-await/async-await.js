// Sintaxe alternativa para o consumo de promises: async / await

const users = require('../promisesEncadeadas/data');

const getUsers = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let fetchedUsers = users;
            
            if(fetchedUsers.length > 0){
                resolve(fetchedUsers);
            } else {
                reject('a base de dados está vazia');
            }
        }, 2000);
    })
};

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
            reject('não há usuários do sexo masculino nessa base de dados')
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

const getAdultMaleUsers = async () => {
    try {

        let users = await getUsers();
        let maleUsers = await getMaleUsers(users);
        let maleAdults = await checkAge(maleUsers);
        console.log(maleAdults);

        return maleAdults;

    } catch(error) {
        console.log(error);
    }
}

getAdultMaleUsers();