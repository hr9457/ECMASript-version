// retorna una especie de valores
// segun el algrotimo defino

function* iterate(array){
    for(let value of array){
        yield value;
    }
}

const it = iterate(['oscar','david','ana']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);