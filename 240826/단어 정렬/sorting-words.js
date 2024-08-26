const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
const arr = input.slice(1).sort()

for (let elem of arr){
    console.log(elem)
}