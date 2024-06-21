const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let arr = input[1].split(" ").map(Number)
let countArr = Array(9).fill(0);

for (let elem of arr){
    countArr[elem - 1]++
}

for (let i = 0; i < 9; i++)
    console.log(countArr[i])