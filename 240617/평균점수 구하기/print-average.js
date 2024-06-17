const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sumVal = 0;
for (let elem of arr) {
    sumVal += elem
}

let avg = sumVal / 8
console.log(avg.toFixed(1));