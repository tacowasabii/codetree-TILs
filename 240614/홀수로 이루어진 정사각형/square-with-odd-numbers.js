const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let str = "";
let num = 11;

for (let i = 1; i <= n; i++) {
    str = "";
    for (let j = 0; j < n; j++) {
        str += num + 2 * j + " ";
    }
    num += 2
    console.log(str);
}