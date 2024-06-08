const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split(" ")

a = Number(arr[0])
b = Number(arr[1])

if (a >= b)
    console.log(1)
else
    console.log(0)
if (a > b)
    console.log(1)
else
    console.log(0)
if (b >= a)
    console.log(1)
else
    console.log(0)
if (b > a)
    console.log(1)
else
    console.log(0)
if (a == b)
    console.log(1)
else
    console.log(0)
if (a != b)
    console.log(1)
else
    console.log(0)