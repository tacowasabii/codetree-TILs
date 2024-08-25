const fs = require("fs")
const a = fs.readFileSync(0).toString().trim()
const arr = [...a]
arr.sort()
console.log(arr.join(""))