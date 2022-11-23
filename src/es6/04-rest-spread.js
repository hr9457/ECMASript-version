// array destructuring

let fruist = ['apple', 'Banana'];
let [a, b] = fruist;
console.log(a, b);


// object destructuring
let user = {username: 'hector', age:27};
let {username, age} = user;
console.log(username, age);
console.log(user.username, user.age);


// spread operator
let person = { name: 'oscar', age: 28};
let country = 'MX';

let data = {...person, country};
console.log(data);


// rest operator
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}


sum(1, 1, 2, 3);




// solucion a problema
function solution(json1 = {
    name: "Mr. Michi",
    food: "Pescado"
}, json2 = {
    age: 12,
    color: "Blanco"
}) 
{
 // Tu código aquí 👈
  let nuevo = {...json1, ...json2};
  console.log(nuevo);
}


solution();

solution({
    name: "Bigotes",
    food: "Pollito"
});


