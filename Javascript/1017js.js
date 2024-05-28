var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var tempoGasto = lines.shift();
var velocidadeM = lines.shift();
var distancia = tempoGasto * velocidadeM;
var consumo = distancia / 12;

console.log(consumo.toFixed(3));