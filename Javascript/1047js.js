var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var valor = lines.shift().split(" ");
var hInicial = parseInt(valor[0]);
var mInicial = parseInt(valor[1]);
var hFinal = parseInt(valor[2]);
var mFinal = parseInt(valor[3]);
var hTotal = (hFinal - hInicial);
var mTotal = (mFinal - mInicial);

if (mTotal < 0) {
    mTotal += 60;
    hTotal --;
}
if (hTotal < 0) {
    hTotal += 24;
}
if (hInicial == hFinal && mInicial == mFinal) {
    console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
} else {
    console.log(`O JOGO DUROU ${hTotal} HORA(S) E ${mTotal} MINUTO(S)`);
}