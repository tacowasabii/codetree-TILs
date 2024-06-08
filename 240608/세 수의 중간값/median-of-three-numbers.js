const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split(" ")

let a = Number(arr[0])
let b = Number(arr[1])
let c = Number(arr[2])

if (b > a && b < c)
    console.log(1)
else
    console.log(0)