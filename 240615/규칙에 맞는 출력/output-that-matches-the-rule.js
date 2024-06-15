const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let str = "";

for (let i = 0; i < n; i++) {
    str = "";
    for (let j = n- i; j <= n; j++) {
        str += j + " ";
    }
    console.log(str);
}