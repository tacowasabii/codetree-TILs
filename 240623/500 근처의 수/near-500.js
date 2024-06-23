const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let max = Number.MIN_SAFE_INTEGER, min = Number.MAX_SAFE_INTEGER

for (let elem of arr){
    if (elem < 500 && elem > max)
        max = elem
    else if (elem > 500 && elem < min)
        min = elem
}

console.log(max, min)