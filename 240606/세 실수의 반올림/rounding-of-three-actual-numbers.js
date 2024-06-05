const fs = require("fs");
let arr = fs.readFileSync(0).toString().split("\n");

a = Number(arr[0])
b = Number(arr[1])
c = Number(arr[2])

console.log(a.toFixed(3))
console.log(b.toFixed(3))
console.log(c.toFixed(3))