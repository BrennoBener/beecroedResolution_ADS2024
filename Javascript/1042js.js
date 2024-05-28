var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var lines = input.split(" ");
var valor1 = parseInt(lines.shift().split(" "));
var valor2 = parseInt(lines.shift().split(" "));
var valor3 = parseInt(lines.shift().split(" "));
 
 if ( valor1 > valor2 && valor1 > valor3) {
     if (valor2 > valor3) {
         console.log(valor3);
         console.log(valor2);
         console.log(valor1);
     } else {
         console.log(valor2);
         console.log(valor3);
         console.log(valor1);
     }
 } else if (valor2 > valor3 && valor2 > valor1) {
     if (valor1 > valor3){
         console.log(valor3);
         console.log(valor1);
         console.log(valor2);
     } else {
         console.log(valor1);
         console.log(valor3);
         console.log(valor2);
     }
 } else {
     if(valor1 > valor2) {
         console.log(valor2);
         console.log(valor1);
         console.log(valor3);
     } else {
         console.log(valor1);
         console.log(valor2);
         console.log(valor3);
     }
 }
 
 console.log("\n" + valor1);
 console.log(valor2);
 console.log(valor3);