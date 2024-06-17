const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sum = 0
let cnt = 0

for (let elem of arr) {
    if (elem === 0)
        break
    if (elem % 2 === 0){
        sum += elem
        cnt++
    } 
}

console.log(cnt, sum);