const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(" ");

console.log(a.charCodeAt() + b.charCodeAt(), Math.abs(a.charCodeAt() - b.charCodeAt()))