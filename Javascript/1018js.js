var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var valor = lines.shift();
console.log(valor);

var valorInt = parseInt(valor / 100);
console.log(`${valorInt} nota(s) de R$ ${100},00`);
valor = valor % 100;

var valorInt = parseInt(valor / 50);
console.log(`${valorInt} nota(s) de R$ ${50},00`);
valor = valor % 50;

var valorInt = parseInt(valor / 20);
console.log(`${valorInt} nota(s) de R$ ${20},00`);
valor = valor % 20;

var valorInt = parseInt(valor / 10);
console.log(`${valorInt} nota(s) de R$ ${10},00`);
valor = valor % 10;

var valorInt = parseInt(valor / 5);
console.log(`${valorInt} nota(s) de R$ ${5},00`);
valor = valor % 5;

var valorInt = parseInt(valor / 2);
console.log(`${valorInt} nota(s) de R$ ${2},00`);
valor = valor % 2;

var valorInt = parseInt(valor / 1);
console.log(`${valorInt} nota(s) de R$ ${1},00`);
valor = valor % 1;