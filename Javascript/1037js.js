var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
var algumaCoisa = parseFloat(lines.shift());
if (algumaCoisa >= 0 && algumaCoisa <= 25){
    console.log('Intervalo [0,25]');
} else if (algumaCoisa > 25 && algumaCoisa <= 50){
    console.log('Intervalo (25,50]');
} else if (algumaCoisa > 50 && algumaCoisa <= 75){
    console.log('Intervalo (50,75]');
} else if (algumaCoisa > 75 && algumaCoisa <= 100){
    console.log('Intervalo (75,100]');
} else {
    console.log('Fora de intervalo');
}