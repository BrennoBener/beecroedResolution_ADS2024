var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var valor = lines.shift().split(" ");
var a = parseInt(valor.shift())
var b = parseInt(valor.shift())
var c = parseInt(valor.shift())
var d = parseInt(valor.shift())

if ((b > c) && (d > a) && ((c + d) > (a + b)) && (c > 0) && (d > 0) && (a % 2 === 0)) {
    console.log("Valores aceitos")
} else {
    console.log("Valores nao aceitos")
}