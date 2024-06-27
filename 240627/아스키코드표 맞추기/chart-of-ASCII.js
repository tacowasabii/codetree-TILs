const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ").map((elem) => String.fromCharCode(elem));
console.log(arr.join(" "))