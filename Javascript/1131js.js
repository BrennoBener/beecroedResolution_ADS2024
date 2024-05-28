let numero;
let [x, y] = lines.shift().split(" ");
let X = parseInt(x);
let Y = parseInt(y);
let Inter = 0;
let Grem = 0;
let emp = 0;
let cont = 0;
let time;

while (true) {
    if ( X == Y) {
        emp ++;
    } else if ( Y > X){
        Grem ++;
    } else if ( X > Y) {
        Inter ++;
    }
    
    cont ++;
    console.log("Novo grenal (1-sim 2-nao)");
    numero = lines.shift();
    if(numero == 1){
        
    } else {
        break;
    }
    
    [x , y] = lines.shift().split(" ");
    X = parseInt(x);
    Y = parseInt(y);
}

if (Inter > Grem) {
    time = "Inter venceu mais";
} else if (Inter < Grem) {
    time = "Gremio venceu mais";
} else {
    time = "Não houve vencedor";
}

console.log(`${cont} grenais\nInter:${Inter}\nGremio:${Grem}\nEmpates:${emp}\n${time}`);