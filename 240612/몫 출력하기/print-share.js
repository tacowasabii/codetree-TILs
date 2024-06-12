const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");

let idx = 0
let cnt = 0

while(cnt < 3){
    n = Number(arr[idx])
    if (n % 2 === 0){
        console.log(n / 2)
        cnt ++
    }
    idx++
}