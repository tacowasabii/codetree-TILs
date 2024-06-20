const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let cnt = 0
let tmp = []
let num = n

while(true){
    tmp.push(num)
    if (num % 5 === 0)
        cnt++
    if (cnt == 2)
        break
    num += n
}

console.log(tmp.join(" "))