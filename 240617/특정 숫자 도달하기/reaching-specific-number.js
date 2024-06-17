const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ")

let sum = 0;
let cnt = 0

for(let i = 0; i < 10; i++){
    if (Number(arr[i]) >= 250)
        break
    sum += Number(arr[i])
    cnt++
}

console.log(sum, (sum / cnt).toFixed(1))