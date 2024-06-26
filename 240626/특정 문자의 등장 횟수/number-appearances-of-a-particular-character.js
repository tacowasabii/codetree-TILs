const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let a = 0, b = 0

for (let i = 0; i < input.length - 1; i++){
    if (input.slice(i, i + 2) === "ee")
        a++
}
for (let i = 0; i < input.length - 1; i++){
    if (input.slice(i, i + 2) === "eb")
        b++
}
console.log(a, b)