const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
a = Number(input[0])
b = Number(input[1])
c = Number(input[2])

sum = a + b + c
avg = (a + b + c) / 3

console.log(sum)
console.log(avg)
console.log(sum - avg)