let x, y;
 let str = "";
 let array = [];
 
 for (i = 0; i < lines.length; i++) {
     x = parseInt(lines[i]);
     if (x === 0) {
         console.log(str.trim());
         break;
     } else {
         for (b = 1; b <= x; b++) {
             if (b === x) {
                 str += b +"\n";
             } else {
                 str += b +" ";
             }
         }
     }
 }