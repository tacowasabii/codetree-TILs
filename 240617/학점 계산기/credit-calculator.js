const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let sumVal = 0;
for (let elem of arr) {
    sumVal += elem
}

let avg = sumVal / n
console.log(avg.toFixed(1));

if (avg >= 4)
    console.log("Perfect")
else if (avg >= 3)
    console.log("Good")
else
    console.log("Poor")