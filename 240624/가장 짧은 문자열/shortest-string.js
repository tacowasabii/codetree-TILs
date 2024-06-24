const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");
let lenArr = arr.map((elem) => elem.length)

console.log(Math.max(...lenArr) - Math.min(...lenArr))