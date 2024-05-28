let N = parseInt(lines.shift());
let [a, b] = lines.shift().trim().split(" ");
let i = 0;
let rato = 0;
let sapo = 0;
let coelho = 0;

while(i < N){
  if(b == "C"){
    coelho += parseInt(a);
  }
  else if(b == "R"){
    rato += parseInt(a);
  }
  else if(b == "S"){
    sapo += parseInt(a);
  }
  i++;
  [a, b] = lines.shift().trim().split(" ");
}
let total = sapo + coelho + rato;
console.log(`Total: ${total} cobaias\nTotal de coelhos: ${coelho}\nTotal de ratos: ${rato}\nTotal de sapos: ${sapo}\nPercentual de coelhos: ${((coelho / total) * 100).toFixed(2)} %\nPercentual de ratos: ${((rato / total) * 100).toFixed(2)} %\nPercentual de sapos: ${((sapo / total) * 100).toFixed(2)} %`);