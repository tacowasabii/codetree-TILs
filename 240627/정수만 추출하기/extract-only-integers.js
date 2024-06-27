const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(" "); 

let numStr = "";
let numStr2 = ""

for (let i = 0; i < a.length; i++) {
    if (a[i] >= '0' && a[i] <= '9') {
        numStr += a[i];
    } else {
        break;
    }
}
for (let i = 0; i < b.length; i++) {
    if (b[i] >= '0' && b[i] <= '9') {
        numStr2 += b[i];
    } else {
        break;
    }
}

console.log(Number(numStr) + Number(numStr2))