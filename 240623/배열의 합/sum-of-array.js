const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < 4; i++) {
    let sum = 0
    input[i].split(" ").map(Number).forEach(elem => sum += elem)
    console.log(sum)
}