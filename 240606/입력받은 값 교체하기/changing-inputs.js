const fs = require("fs");
let arr = fs.readFileSync(0).toString().split(" ");

a = Number(arr[0]);
b = Number(arr[1]);
[a, b] = [b, a]

console.log(a, b)