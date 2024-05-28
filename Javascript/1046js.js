var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var [a, b, c] = lines.shift().trim().split(" ").map((i) => parseFloat(i));
var calculo = (b * b) - 4 * a * c;

if ( calculo > -1 && a !== 0) {
    var raiz1 = (-b + Math.sqrt(calculo)) / (2 * a);
    var raiz2 = (-b - Math.sqrt(calculo)) / (2 * a);
    
    console.log("R1 = " + raiz1.toFixed(5));
    console.log("R2 = " + raiz2.toFixed(5));
}else {
    console.log("Impossivel calcular");
}