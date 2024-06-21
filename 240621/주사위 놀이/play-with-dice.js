const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let countArr = Array(6).fill(0)

for (let elem of input){
    countArr[elem - 1]++
}

for (let i = 0; i < 6; i++){
    console.log(`${i + 1} - ${countArr[i]}`)
}