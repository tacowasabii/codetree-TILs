const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let cnt = 0
let ans = []

for (let i = 0; i < input.length; i++){
    if (input[i] === '0')
        break
    else if (i % 2 === 0)
        ans.push(input[i])
    cnt++
}
console.log(cnt)
ans.forEach((elem) => console.log(elem))