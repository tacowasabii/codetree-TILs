const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let cnt = 0

for (let i = 0; i < input[0].length - input[1].length + 1; i++){
    if (input[0].slice(i, i + 2) === input[1])
        cnt++
}

console.log(cnt)