const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

console.log(input.slice(1).join(""))