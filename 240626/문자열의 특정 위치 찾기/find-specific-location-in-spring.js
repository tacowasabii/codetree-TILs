const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let idx = input[0].indexOf(input[1])
if (idx === -1)
    console.log("No")
else
    console.log(idx)