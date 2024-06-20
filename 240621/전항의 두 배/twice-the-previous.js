const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let arr = [input[0], input[1]]


for (let i = 2; i < 10; i++){
    arr.push(arr[i - 2] * 2 + arr[i - 1])
}

console.log(arr.join(" "))