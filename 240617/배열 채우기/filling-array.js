const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let ans = []
for (let elem of arr) {
    if (elem === 0)
        break
    ans.push(elem)
}

console.log(ans.reverse().join(" "));