const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split(" ")

let a = Number(arr[0])
let b = Number(arr[1])
let c = Number(arr[2])

res1 = a == Math.min(a, b, c) ? 1 : 0
res2 = a != b ? 0 : b != c ? 0 : 1

console.log(res1, res2)