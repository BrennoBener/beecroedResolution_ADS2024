var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var distancia = (60 * lines.shift())/30;
console.log(distancia + " minutos");