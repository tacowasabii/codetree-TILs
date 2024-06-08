const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split("\n")

let a = Number(arr[0])
let b = Number(arr[1])

if (a >= 1 && b >= 1)
    console.log("High")
else if (a >= 0.5 && b >= 0.5)
    console.log("Middle")
else
    console.log("Low")