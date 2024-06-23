const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < 5; i++) {
    console.log(input[i].toUpperCase())
}