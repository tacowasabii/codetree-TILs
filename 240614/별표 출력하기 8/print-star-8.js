const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let str = "";

for (let i = 0; i < n; i++) {
    str = "";
    if (i % 2 !== 0) {
        for (let j = 0; j < i + 1; j++) {
            str += "* ";
        }
    }
    else {
        str += "*";
    }

    console.log(str);
}