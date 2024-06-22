const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = input[0].split(" ").map(Number)
let arr = input[1].split(" ").map(Number)
let cnt = 0

for (let i = 0; i < n; i++){
    if (arr[i] === 2)
        cnt++
    if (cnt === 3){
        console.log(i + 1)
        break
    }   
}