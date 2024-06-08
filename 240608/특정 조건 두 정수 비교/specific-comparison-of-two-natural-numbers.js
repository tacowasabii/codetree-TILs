const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split(" ")

let a = Number(arr[0])
let b = Number(arr[1])

res1 = a < b ? 1 : 0
res2 = a == b ? 1 : 0

console.log(res1, res2)