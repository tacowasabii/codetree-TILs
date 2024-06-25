const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let a = input[0].split(" ")
let b = input[1].split(" ")


console.log(a.join("") + b.join(""))