const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");
a = Number(arr[0])
b = Number(arr[1])

if (a > b)
    console.log(a - b)
else
    console.log(b - a)