const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sum = 0, sum2 = 0, cnt = 0

for (let i = 0; i < 10; i++){
    order = i + 1
    if (order % 2 === 0)
        sum += input[i]
    if (order % 3 === 0){
        sum2 += input[i]
        cnt++
    }
}
console.log(sum, (sum2 / cnt).toFixed(1))