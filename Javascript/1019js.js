var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var valor = lines.shift();
var tempoHoras = parseInt(valor / 3600);
var tempoMinutos = parseInt((valor % 3600)/60);
var tempoSegundos = parseInt((valor % 3600) % 60);
console.log(`${tempoHoras}:${tempoMinutos}:${tempoSegundos}`);