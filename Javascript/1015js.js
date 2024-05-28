var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var [pontoX1, pontoY1] = lines.shift().split(" ");
var [pontoX2, pontoY2] = lines.shift().split(" ");
var distancia = Math.sqrt(Math.pow((pontoX2 - pontoX1), 2) + Math.pow((pontoY2 - pontoY1), 2));
console.log(distancia.toFixed(4));