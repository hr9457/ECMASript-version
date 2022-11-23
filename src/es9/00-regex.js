// para manejo de expresiones regulares
const regex = /(\d{4})-(\d{2})-(\d{2})/;

const match = regex.exec('2000-01-02');
console.table(match);
console.log(match);