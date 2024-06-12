const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let cnt = 0

while (n > 1){
    cnt++;
    n = parseInt(n / cnt)
}
console.log(cnt)