const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split("\n")

a = Number(arr[0])
let [b, c, d, e] = arr[1].split(" ")

if (a > b)
    console.log(1)
else
    console.log(0)
if (a > c)
    console.log(1)
else
    console.log(0)
if (a > d)
    console.log(1)
else
    console.log(0)
if (a > e)
    console.log(1)
else
    console.log(0)