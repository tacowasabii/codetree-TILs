const fs = require("fs");
let m = Number(fs.readFileSync(0).toString().trim());

if (m >= 3 && m <= 5)
    console.log("Spring")
else if (m >= 6 && m <= 8)
    console.log("Summer")
else if (m >= 9 && m <= 11)
    console.log("Fall")
else
    console.log("Winter")