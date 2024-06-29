const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")

let n = Number(input[0])
let arr = input[1].split(" ").map(Number)

for (let i = 1; i < n; i++){
    key = arr[i]
    j = i - 1
    
    while (j >= 0 && arr[j] > key){
        arr[j + 1] = arr[j]
        j--
    }
    arr[j + 1] = key
}

console.log(arr.join(" "))