var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var [cdp1, qdp1, val1] = lines.shift().split(" ");
var [cdp2, qdp2, val2] = lines.shift().split(" ");
var valT1 = qdp1 * val1;
var valt2 = qdp2 * val2;

var valTotal = valT1 + valt2;
console.log("VALOR A PAGAR: R$ " + valTotal.toFixed(2));