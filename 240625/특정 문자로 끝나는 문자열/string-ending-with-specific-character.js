const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let flag = true

input.slice(0, 10).forEach((elem) => {
    if (elem.at(-1) === input[10])
        console.log(elem)
        flag = false
})

if (flag)
    console.log("None")