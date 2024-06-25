const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

if (input.join("") === input.reverse().join(""))
    console.log("true")
else
    console.log("false")