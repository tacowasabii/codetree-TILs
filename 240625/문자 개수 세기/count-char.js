const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let str = input[0]
let target = input[1]
let cnt = 0

for (let elem of str){
    if (elem === target)
        cnt++
}

console.log(cnt)