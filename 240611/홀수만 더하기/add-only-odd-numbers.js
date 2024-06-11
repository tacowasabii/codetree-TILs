const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(arr[0])
let sum = 0

for (i = 1; i <= n; i++){
    num = Number(arr[i])
    if (num % 2 === 1 && num % 3 === 0)
        sum += Number(arr[i])
}

console.log(sum)