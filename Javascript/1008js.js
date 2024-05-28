var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var codFun = lines.shift();
var horas = lines.shift();
var horasTra = lines.shift();
var salary = horas * horasTra;
console.log("NUMBER = " + codFun);
console.log("SALARY = U$ " + salary.toFixed(2));