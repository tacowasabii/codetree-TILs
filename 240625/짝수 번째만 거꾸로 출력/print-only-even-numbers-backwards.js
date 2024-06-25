const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("");
let result = []

input.forEach((elem, idx) => {
    if (idx % 2 === 1)
        result.push(elem)
})

console.log(result.reverse().join(""))