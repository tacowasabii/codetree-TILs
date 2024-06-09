const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

if (n % 4 !== 0 || n % 100 === 0 && n % 400 !== 0)
    console.log("false")
else
    console.log("true")