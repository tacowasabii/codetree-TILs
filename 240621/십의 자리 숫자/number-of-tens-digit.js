const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let countArr = Array(10).fill(0)

for (let elem of input){
    if (elem === 0)
        break
    countArr[parseInt(elem / 10)]++
}

for (let i = 1; i < 10; i++){
    console.log(`${i} - ${countArr[i]}`)
}