const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split("\n"); 

let numStr = "";
let numStr2 = ""

for (let i = 0; i < a.length; i++) {
    if (a[i] >= '0' && a[i] <= '9') {
        numStr += a[i];
    } 
}
for (let i = 0; i < b.length; i++) {
    if (b[i] >= '0' && b[i] <= '9') {
        numStr2 += b[i];
    } 
}

console.log(Number(numStr) + Number(numStr2))