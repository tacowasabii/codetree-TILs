const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(arr[0])
let sum = 0
let cnt = 0

for (i = 1; i <= n; i++){
        sum += Number(arr[i]);
        cnt++;
}

console.log(sum, (sum / cnt).toFixed(1))