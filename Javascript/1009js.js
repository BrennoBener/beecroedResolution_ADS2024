var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var name = lines.shift();
var fixSalary = parseFloat(lines.shift());
var salesTotal = parseFloat(lines.shift());
var totalSalary = fixSalary + 0.15 * salesTotal;
console.log(`TOTAL = R$ ${totalSalary.toFixed(2)}`);