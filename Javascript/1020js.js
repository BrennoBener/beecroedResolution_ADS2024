var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var inteiro = parseInt(lines.shift());
var ano = Math.floor(inteiro / 365);
var mes = Math.floor((inteiro % 365) / 30);
var dia = Math.floor((inteiro % 365) % 30);

console.log(`${ano} ano(s)`);
console.log(`${mes} mes(es)`);
console.log(`${dia} dia(s)`);