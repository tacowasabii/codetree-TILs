const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let str = "";

for (let i = 0; i < n; i++) {
    str = "";

    if (i % 2 === 0){
        for (let j = 1; j <= n; j++) {
            str += i * n + j + " "
        } 
    } else {
        for (let j = 0; j < n; j++) {
            str += (i + 1) * n - j + " "
        } 
    }
   
    console.log(str);
}