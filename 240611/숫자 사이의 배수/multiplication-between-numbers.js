const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(arr[0]), b = Number(arr[1])
let sum = 0
let cnt = 0

for (i = a; i <= b; i++){
    if (i % 5 === 0 || i % 7 === 0){
        sum += i;
        cnt++;
    }
}

console.log(sum, (sum / cnt).toFixed(1))