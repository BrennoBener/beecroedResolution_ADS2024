let N = lines.shift();
let numero = lines.shift();
let cont = 0;
let i = 0;

while(i < N) {
    for (let x = 2; x < numero; x++){
        if(numero % x === 0) {
            cont ++;
        }
    }
    
    if(cont > 0){
        console.log(`${parseInt(numero)} nao eh primo`);
    } else {
        console.log(`${parseInt(numero)} eh primo`);
    }
    
    cont = 0;
    i++;
    numero = lines.shift();
}