let N = parseInt(lines.shift());
let fibnc = [0, 1];

for(let i = 2; i < N; i++){
    fibnc.push(fibnc[i - 1] + fibnc[i- 2]);
}

console.log(fibnc.join(' '));