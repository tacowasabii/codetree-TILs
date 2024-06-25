const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
input.forEach((elem, idx) => {
    console.log(input[10 - idx - 1])
})