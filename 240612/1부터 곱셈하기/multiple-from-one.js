const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let prod = 1

for (i = 1; i <= 10; i++){
    prod *= i
    if (prod >= n){
        console.log(i)
        break
    }
}