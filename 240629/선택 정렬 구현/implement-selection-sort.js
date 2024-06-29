const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")

let n = Number(input[0])
let arr = input[1].split(" ").map(Number)

for (let i = 0; i < n - 1; i++){
    min = i
    for (let j = i + 1; j < n; j ++){
        if (arr[min] > arr[j])
            min = j
    }
    [arr[min], arr[i]]= [arr[i], arr[min]]
}

console.log(arr.join(" "))