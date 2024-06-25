const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let cnt = 0
let result = ""
let tmp = input[0]

for (let elem of input){
    if (elem !== tmp){
        result += tmp
        result += cnt
        tmp = elem
        cnt = 0
    } 
    cnt++
}
result += tmp
result += cnt

console.log(result.length)
console.log(result)