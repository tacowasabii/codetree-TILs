const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j < n; j++) {
        if (i === 0 || i === n - 1) {
            line += '* ';
        } else if (j < i || j === n - 1) {
            line += '* ';
        } else {
            line += '  ';
        }
    }
    console.log(line.trim());
}