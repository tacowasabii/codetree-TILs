const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
const [n, m] = input[0].split(" ").map(Number)
const arr = input[1].split(" ").map(Number)

for (let i = 2; i < 2 + m; i++){
    [start, end] = input[i].split(" ").map(Number)
    new_arr = arr.slice(start - 1, end)
    console.log(new_arr.reduce((acc, v) => acc + v, 0))
}