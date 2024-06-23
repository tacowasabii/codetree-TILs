const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0])
let arr = input[1].split(" ").map(Number);
let min = arr[0]
let profits = [0]

for (let i = 1; i < n; i++){
    if (arr[i] > min)
        profits.push(arr[i] - min)
    else if (arr[i] < min)
        min = arr[i]
}

console.log(Math.max(...profits))