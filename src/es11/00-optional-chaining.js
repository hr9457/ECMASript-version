const users = {
    gndx:{
        country: 'MX'
    },
    ana: {
        country: 'CO'
    }
};


console.log(users.gndx.country);
console.log(users.gndx.age);
console.log(users.hector?.country);

// esto tira error por que no existe 
// los niveles en el json
console.log(users.hector.country);