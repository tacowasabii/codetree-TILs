const fs = require("fs");
let arr = fs.readFileSync(0).toString().split("\n");

console.log(arr[1])
console.log(arr[0])