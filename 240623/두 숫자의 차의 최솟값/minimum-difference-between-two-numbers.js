const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0])
let arr = input[1].split(" ").map(Number).sort((a, b) => a - b);
let min = 100

for (let i = 1; i < n; i++)
    min = Math.min(min, arr[i] - arr[i - 1])

console.log(min)