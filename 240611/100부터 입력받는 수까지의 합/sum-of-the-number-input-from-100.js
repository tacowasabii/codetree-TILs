const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let sum = 0

for (i = n; i <= 100; i++){
    sum += i
}

console.log(sum)