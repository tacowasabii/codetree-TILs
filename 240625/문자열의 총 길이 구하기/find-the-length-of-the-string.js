const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let cnt = 0
input.forEach((elem) => cnt += elem.length)
console.log(cnt)