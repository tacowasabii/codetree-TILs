const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let tmp = []

for (let elem of arr){
    if (elem === 0)
        break
    else if (elem % 2 === 1)
        tmp.push(elem + 3)
    else
        tmp.push(elem / 2)
}
console.log(tmp.join(" "))