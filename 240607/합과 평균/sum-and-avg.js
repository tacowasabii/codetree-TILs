const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
a = Number(input[0])
b = Number(input[1])

sum = a + b
avg = (a + b) / 2

console.log(sum, avg.toFixed(1))