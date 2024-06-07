const fs = require("fs");
let score = Number(fs.readFileSync(0).toString().trim());

result = score == 100 ? "pass" : "failure"
console.log(result)