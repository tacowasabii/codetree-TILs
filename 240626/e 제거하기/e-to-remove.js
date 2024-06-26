const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
console.log(input.slice(0, input.indexOf("e")) + input.slice(input.indexOf("e") + 1))