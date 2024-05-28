let X = parseInt(lines.shift());

if(X % 2 === 0){
    X++;
}

for (let i = 0; i < 6; i++){
    console.log(X);
    X += 2;
}