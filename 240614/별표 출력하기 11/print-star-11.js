const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let size = 2 * n + 1;
let str = "";

for (let i = 0; i < size; i++) {
    str = "";
    for (let j = 0; j < size; j++) {
        if (i % 2 === 0 || j % 2 === 0) {
            str += "* ";
        } else {
            str += "  ";
        }
    }
    console.log(str.trim());
}