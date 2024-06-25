const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let str = input[0];
let n = Number(input[1]);

let result = str.slice(-n).split("").reverse().join("");
console.log(result);