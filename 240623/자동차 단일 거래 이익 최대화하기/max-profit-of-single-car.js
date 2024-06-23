const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0])
let arr = input[1].split(" ").map(Number);
let profit = 0
let price = arr[0]
let profits = []

for (let i = 1; i < n; i++){
    if (arr[i] > price){
        profit += arr[i] - price
        profits.push(profit)
    } else if (arr[i] < price){
        profit = 0
    }
    price = arr[i]
}

console.log(Math.max(...profits))