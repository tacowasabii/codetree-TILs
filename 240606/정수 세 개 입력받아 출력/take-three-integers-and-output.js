const fs = require("fs");
let arr = fs.readFileSync(0).toString().split("\n");

let [a, b] = arr[0].split(" ")
c = Number(arr[1])

console.log(a, b, c)