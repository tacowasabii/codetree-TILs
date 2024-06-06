const fs = require("fs");
let arr = fs.readFileSync(0).toString().split(":");

console.log(String(Number(arr[0])+1)+':'+arr[1])