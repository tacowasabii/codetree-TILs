const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let len = 0
let cnt = 0

input.slice(1, 1 + Number(input[0])).forEach((elem) => {
    if (elem[0] === input.at(-1)){
        len += elem.length
        cnt++
    }
})

console.log(cnt, (len / cnt).toFixed(2))