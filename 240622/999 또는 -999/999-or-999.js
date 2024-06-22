const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);
arr.pop()
const max = Math.max(...arr)
const min = Math.min(...arr)

console.log(max, min)