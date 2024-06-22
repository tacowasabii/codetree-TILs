const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let arr = input[1].split(" ").map(Number)
let max = -1
let nums = []

for (let elem of arr){
    if (!nums.includes(elem))
        max = Math.max(max, elem)
        nums.push(elem)
}

console.log(max)