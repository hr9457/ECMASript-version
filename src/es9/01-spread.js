// spread con objectos
const user = {
    username: 'hector',
    age: 27,
    country: 'GT'
};


const { username, ...values} = user;
console.log(username);
console.log(values);