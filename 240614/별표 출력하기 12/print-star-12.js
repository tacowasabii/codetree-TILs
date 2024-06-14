const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
        if (i === j || i % 2 === 0 && j % 2 === 0) {
            str += "* ";
        } else {
            str += "  ";
        }
    }
    console.log(str.trim());
}