const readline = require('readline-sync');
console.log('Program Penambahan angka');
const number1 = readline.question('Masukan angka pertama:');
const number2 = readline.question('Masukan angka kedua:'); 

function add(a,b) {
	return a + b;
}
const hasil = add(parseInt(number1), parseInt(number2));
console.log(hasil);