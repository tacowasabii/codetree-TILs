const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")

let n = Number(input[0])
let arr = input[1].split(" ").map(Number)
let sorted = false

while(!sorted){
    sorted = true
    for (let i = 0; i < n - 1; i++){
        if (arr[i] > arr[i + 1]){
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            sorted = false
        }
    }
    n--
}
console.log(arr.join(" "))