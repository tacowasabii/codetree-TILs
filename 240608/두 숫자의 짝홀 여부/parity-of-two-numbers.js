const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split(" ")

let [a, b] = arr

if (a % 2 == 0)
    console.log("even")
else 
    console.log("odd")
if (b % 2 == 0)
    console.log("even")
else 
    console.log("odd")