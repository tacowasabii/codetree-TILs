const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[1])

console.log(input[0].split("").slice(input[0].length - n, input[0].length).reverse().join(""))