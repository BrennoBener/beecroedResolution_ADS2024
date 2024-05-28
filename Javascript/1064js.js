for (let i = 0; i < 6; i++) {
    let valor = parseFloat(lines[i]);
    if (valor > 0) {
        totalPositivos++;
        somaPositivos += valor;
    }
}

console.log(totalPositivos + " valores positivos");

if (totalPositivos > 0) {
    const media = somaPositivos / totalPositivos;
    console.log(media.toFixed(1));
}