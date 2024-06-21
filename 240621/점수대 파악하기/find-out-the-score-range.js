const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let countArr = Array(11).fill(0)

for (let elem of input){
    if (elem === 0)
        break
    countArr[parseInt(elem / 10)]++
}

for (let i = 10; i > 0; i--){
    console.log(`${i}0 - ${countArr[i]}`)
}