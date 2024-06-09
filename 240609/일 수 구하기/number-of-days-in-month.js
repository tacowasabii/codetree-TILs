const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

if (n === 2)
    console.log(28)
else if (n === 1 || n === 3 || n === 5 || n === 7 || n === 8 || n === 10 || n === 12)
    console.log(31)
else
    console.log(30)