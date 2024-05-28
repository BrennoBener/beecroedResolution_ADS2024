let soma = 0;
let cont = 0;

while(true){
    let n = parseInt(lines.shift());
    if (n  <  0){
        break;
    }
    soma += n;
    cont += 1;
}

console.log((soma / cont).toFixed(2));