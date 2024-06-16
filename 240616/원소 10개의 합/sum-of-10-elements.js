const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ")

let sum = 0

arr.forEach(n => sum += Number(n))

console.log(sum);