const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split(" ")

let a = Number(arr[0])
let b = Number(arr[1])
let c = Number(arr[2])

let min;

if (a <= b && a <= c)
    min = a
else if (a <= b && c <= a)
    min = c
else 
    min = b
console.log(min)