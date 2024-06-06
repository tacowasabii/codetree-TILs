const fs = require("fs");
let arr = fs.readFileSync(0).toString().split("\n");

console.log(arr[0])
console.log(Number(arr[1]).toFixed(2))
console.log(Number(arr[2]).toFixed(2))