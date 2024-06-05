const fs = require("fs");
let arr = fs.readFileSync(0).toString().split("\n");

a = Number(arr[0])
b = Number(arr[1])

console.log(a * b)