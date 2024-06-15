const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let str = "";

for (let i = 0; i < n; i++) {
    str = "";
    for (let j = 0; j < i + 1; j++) {
        str += (j + 1) * (i + 1) + " ";
    }
    console.log(str);
}