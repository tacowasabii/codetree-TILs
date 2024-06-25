const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let strs = ["apple", "banana", "grape", "blueberry", "orange"]
let cnt = 0

for (let elem of strs){
    if (elem[2] === input || elem[3] === input){
        console.log(elem)
        cnt++   
    }
}
console.log(cnt)