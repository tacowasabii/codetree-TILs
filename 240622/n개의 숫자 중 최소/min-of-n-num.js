const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let arr = input[1].split(" ").map(Number)
let cnt = 0
const min = Math.min(...arr)

for (let elem of arr){
    if (elem === min)
        cnt++
}
console.log(min, cnt)