const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");
a = Number(arr[0])
b = Number(arr[1])

let max = a > b ? a : b
console.log(max)