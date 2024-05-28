let x = lines.shift();
let y = lines.shift();
let i = 0;
let out = 0;
let In = 0;

while (i < x) {
    y <= 20 && y >= 10 ? In++ : out++;
    i++
    y = lines.shift();
}

console.log(`${In} in`);
console.log(`${out} out`);