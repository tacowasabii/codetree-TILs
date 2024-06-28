const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let cnt = 0
 
input.slice(1).map((elem) => {
    if (elem === input[0].split(" ")[1])
        cnt++
})

console.log(cnt)