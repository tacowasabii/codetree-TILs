const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
const n = Number(input[0])
const A = input[1].split(" ").map(Number).sort((a, b) => a - b).join("")
const B = input[2].split(" ").map(Number).sort((a, b) => a - b).join("")

if (A === B){
    console.log("Yes")
} else {
    console.log("No")
}