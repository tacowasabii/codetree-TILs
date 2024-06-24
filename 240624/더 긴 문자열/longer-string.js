const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(" ");

if (a.length > b.length)
    console.log(a, a.length)
else if (a.length < b.length)
    console.log(b, b.length)
else
    console.log("same")