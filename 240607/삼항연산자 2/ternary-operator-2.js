const fs = require("fs");
let a = Number(fs.readFileSync(0).toString().trim());

result = a == 1 ? "t" : "f"

console.log(result)