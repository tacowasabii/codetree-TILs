const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let str = input[0]
let trg = input[1]

while(true){
    let idx = str.indexOf(trg)
    if (idx === -1)
        break
    str = str.slice(0, idx) + str.slice(idx + trg.length)
}

console.log(str)