const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let sum = 0

for (i = 1; i <= 100; i++){
    sum += i
    if (sum >= n){
        console.log(i)
        break
    }
}