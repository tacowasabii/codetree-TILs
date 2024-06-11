const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(arr[0]), b = Number(arr[1])
let sum = 0

for (i = Math.min(a, b); i <= Math.max(a, b); i++){
    if (i % 5 === 0){
        sum += i;
    }
}

console.log(sum)