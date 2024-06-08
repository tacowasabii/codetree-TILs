const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split("\n")

let a = arr[0].split(" ")
let b = arr[1].split(" ")

let am = Number(a[0])
let ae = Number(a[1])
let bm = Number(b[0])
let be = Number(b[1])

if (am > bm && ae > be)
    console.log(1)
else
    console.log(0)