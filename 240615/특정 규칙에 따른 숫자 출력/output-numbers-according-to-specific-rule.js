const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let str = "";
let cnt = 1

for (let i = n; i > 0; i--) {
    str = "";
    for (let j = 0; j < n - i; j++) {
        str += "  ";
    }
    for (let j = i; j > 0; j--) {
        str += cnt + " ";
        cnt++
        if (cnt === 10) cnt = 1
    }
    console.log(str);
}