
let number = parseInt(lines.shift());
let higher = number;
let position = 1;

for (let i = 1; i <= 100; i ++){
    if (higher < number){
        higher = number;
        position = i;
    }
    number = parseInt(lines.shift());
}

console.log(`${higher}\n${position}`);