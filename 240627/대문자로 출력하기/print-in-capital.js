const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(""); 
let ans = ""

for (let elem of input){
    if (/[a-zA-z]/.test(elem))
        ans += elem.toUpperCase()
}

console.log(ans)