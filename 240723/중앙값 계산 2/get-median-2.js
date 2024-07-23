const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
const n = Number(input[0])
const arr = input[1].split(" ").map(Number)

let arr2 = []

for (let i = 0; i < n; i++){
    arr2.push(arr[i])

    if (i % 2 === 0){
        arr2.sort((a, b) => a - b)
        process.stdout.write(String(arr2[i / 2]) + " ")
    }
}