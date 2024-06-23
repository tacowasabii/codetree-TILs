const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let arr = input[1].split(" ").map(Number);
let ans = []

while(true){
    max = Math.max(...arr)
    idx = arr.indexOf(max)
    ans.push(idx + 1)
    if (idx === 0)
        break
    arr = arr.slice(0, idx)
}

console.log(ans.join(" "))