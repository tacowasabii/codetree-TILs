const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
a = Number(input[0])
b = Number(input[1])

console.log(a + b)
console.log(a - b)
console.log(parseInt(a / b))
console.log(a % b)