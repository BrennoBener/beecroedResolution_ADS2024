let X = lines.shift();
let Y = parseInt(lines.shift());
let count = 0;

for (let i = (Y + 1); i < X; i++){
  if (i % 2 !== 0) count+= i;
}
console.log(count);