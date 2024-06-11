const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(arr[0]), b = Number(arr[1])
let prod = 1

for (i = 1; i <= b; i++){
    if (i % a == 0)
        prod *= i
}

console.log(prod)