var test = lines.shift();
var count = 0;

for (var i = 0; i < 6; i ++){
    if (test > 0)
    count ++;
    test = lines.shift();
}

console.log(`${count} valores positivos`);