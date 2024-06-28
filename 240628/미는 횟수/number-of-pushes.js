const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let a = input[0], b = input[1]
let n = 0

while(true){
    a = a.slice(-1) + a.slice(0, -1)
    n++
    if (a === b){
        console.log(n)
        break
    }
}