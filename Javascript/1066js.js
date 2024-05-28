let par = 0;
let impar = 0;
let pos = 0;
let neg = 0;

for (let i = 0; i < 5; i++) {
    
    let valor = parseInt(lines.shift());
    
    if (valor % 2 === 0){
        par++;
    } else{
        impar++;
    }
    
    if (valor < 0){
        neg++;
    }else if(valor > 0){
        pos++;
    }
}

console.log(par + " valor(es) par(es)");
console.log(impar + " valor(es) impar(es)");
console.log(pos + " valor(es) positivo(s)");
console.log(neg + " valor(es) negativo(s)");