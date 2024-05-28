var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var [A,B,C] = lines.shift().split(" ").map(x => parseInt(x));
var maiorAB = (A + B + Math.abs(A - B))/2;
var maiorCI = (C + maiorAB + Math.abs(C - maiorAB))/2;
console.log(`${maiorCI} eh o maior`);