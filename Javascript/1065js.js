let val = parseInt(lines.shift());
let count = 0;

for(let i = 0; i <= val; i++){
    if(i % 2 === 0){
        count++;
    }
}

console.log(count + " valores pares");