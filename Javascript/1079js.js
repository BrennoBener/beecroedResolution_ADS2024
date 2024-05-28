N = parseInt(lines.shift());

for (i = 0; i < N; i++) {
    let [a,b,c] = lines[i].split(" ");
    
    media = ((a * 2) + (b * 3) + (c * 5)) / 10;
    
    console.log(media.toFixed(1));
}