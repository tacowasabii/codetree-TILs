const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
const arr = input[1].split(" ").map(Number)

const asc = [...arr].sort((a, b) => a - b)
const desc = [...arr].sort((a, b) => b - a)

console.log(asc.join(" "))
console.log(desc.join(" "))