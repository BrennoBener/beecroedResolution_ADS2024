var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const valor = lines[0].split(' ').map(valor => parseFloat(valor));

const [A, B, C] = valor;
 
if (A + B > C && A + C > B && B + C > A) {
    var perimetro = A + B + C;
    console.log("Perimetro = " + perimetro.toFixed(1));
} else {
    var area = ((A + B) * C) / 2;
    console.log("Area = " + area.toFixed(1));
}