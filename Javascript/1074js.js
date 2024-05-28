let prompt = function(txt) {
    return lines.shift();
};

let x = parseInt(prompt("Digite Os Valores"));
let y = 0;

while (y != x) {
    y ++;
    let a = parseInt(prompt());
    if (a > 0) {
        if (a % 2 === 0) {
            console.log("EVEN POSITIVE")
        } else (
            console.log("ODD POSITIVE"))
    } else if (a < 0) {
        if (a % 2 === 0) {
            console.log("EVEN NEGATIVE")
        } else {
            console.log("ODD NEGATIVE")
        }
    } else {
        console.log("NULL");
    }
}