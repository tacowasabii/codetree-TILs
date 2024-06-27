const fs = require("fs");
let n = fs.readFileSync(0).toString().trim(); 
let sum = 0

for (let elem of n){
    sum += Number(elem)
}
console.log(sum)