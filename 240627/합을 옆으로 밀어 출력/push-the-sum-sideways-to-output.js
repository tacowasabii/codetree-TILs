const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n"); 
let sum = 0

for (let i = 1; i <= Number(input[0]); i++){
    sum += Number(input[i])
}

console.log(String(sum).slice(1) + String(sum).slice(0, 1))