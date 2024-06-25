const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
input.forEach((elem) => console.log(elem))