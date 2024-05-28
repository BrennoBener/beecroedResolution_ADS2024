var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var [A,B,C] = lines.shift().split(" ").map((val)=> parseFloat(val));
const pi = 3.14159;
var triangulo = (A * C) /2;
var circulo = pi * C * C;
var trapezio = ((A + B) /2) * C;
var quadrado = B * B;
var retangulo = A * B;

console.log(`TRIANGULO: ${triangulo.toFixed(3)}`)
console.log(`CIRCULO: ${circulo.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
console.log(`QUADRADO: ${quadrado.toFixed(3)}`);
console.log(`RETANGULO: ${retangulo.toFixed(3)}`);