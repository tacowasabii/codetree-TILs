const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let [n1, n2] = input[0].split(" ").map(Number)
let arrA = input[1].split(" ").map(Number)
let arrB = input[2].split(" ").map(Number)
let flag = false

for (let i = 0; i <= n1 - n2; i++){
    if (arrA.slice(i, i + n2) === arrB){
        flag = true
        break
    }
}

if (flag)
    console.log("Yes")
else
    console.log("No")