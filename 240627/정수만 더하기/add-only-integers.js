const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(""); 
let ans = 0

for (let elem of input){
    if (elem >= '0' && elem <= '9')
        ans += Number(elem)
}

console.log(ans)