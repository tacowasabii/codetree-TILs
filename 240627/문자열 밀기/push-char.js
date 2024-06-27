const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
console.log(input.slice(1) + input.slice(0, 1));