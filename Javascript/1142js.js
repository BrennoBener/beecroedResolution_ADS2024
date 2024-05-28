let N = parseInt(lines.shift());
let count = 1;

for (let i = 0; i < N; i++){
    console.log(`${count} ${count + 1} ${count + 2} PUM`);
    count+=4;
}