let [x, y] = lines.shift().split(" ");
let txt = "";
let cont = 0;
let bool = false;

for (let i = 1; i <= y; i++) {
    if (i == 1){
        txt += i;
        cont ++;
    } else {
        if(bool) {
            txt += i;
            cont ++;
            bool = false;
        } else {
            txt += " " + i;
            cont++;
        }
        if (i % x === 0) {
            if (i == y){
                break;
            }
            txt += "\n";
            cont = 0;
            bool = true;
        }
    }
}

console.log(txt);