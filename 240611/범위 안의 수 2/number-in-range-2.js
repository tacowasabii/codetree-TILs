const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");
let sum = 0
let cnt = 0

for (i = 0; i < 10; i++){
    if (Number(arr[i]) >= 0 && Number(arr[i]) <= 200){
        sum += Number(arr[i]);
        cnt++;
    }
}

console.log(sum, (sum / cnt).toFixed(1))