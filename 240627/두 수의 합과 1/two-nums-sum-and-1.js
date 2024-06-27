const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number); 
let cnt = 0

for (let elem of String(a + b)){
    if (elem === '1')
        cnt++
}
console.log(cnt)