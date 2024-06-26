const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let a = "", b = ""

if (input.includes("ee"))
    a = "Yes"
else
    a = "No"

if (input.includes("ab"))
    b = "Yes"
else
    b = "No"

console.log(a, b)