const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("");
let a = input[0], b = input[1]

for (let i = 0; i < input.length; i ++){
    if (input[i] === a)
        input[i] = b
    else if (input[i] === b)
        input[i] = a
}
console.log(input.join(""))