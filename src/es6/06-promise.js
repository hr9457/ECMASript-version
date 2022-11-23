
// funcion promesa de algo que va a pasar
// resolve -> resolver 
// reject -> rechar la promesa
const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!!');
        } else {
            reject('Whoops!');
        }
    });
};


// para usar la promesa
// puede ser un resolve o un error
anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));