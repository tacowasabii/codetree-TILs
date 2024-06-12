const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");

let idx = 0
let sum = 0

while(true){
    age = Number(arr[idx])
    if (age < 20 || age >= 30)
        break
    sum += age
    idx++
}
console.log((sum / idx).toFixed(2))