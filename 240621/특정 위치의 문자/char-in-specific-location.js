const fs = require("fs");
let str = fs.readFileSync(0).toString().trim();
let arr = ['L', 'E', 'B', 'R', 'O', 'S']

idx = arr.indexOf(str)

if (idx !== -1)
    console.log(idx)
else
    console.log("None")