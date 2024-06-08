const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(arr[0])
let b = Number(arr[1])

if (a < 90 || b < 90)
    console.log(0)
else if (b < 95)
    console.log(100000)
else if (b >= 90)
    console.log(50000)