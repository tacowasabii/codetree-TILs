const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let str = "";

for (let i = 1; i <= n; i++) {
    str = "";
    for (let j = 1; j < n; j++) {
        str += i + " * " + j + " = " + (i * j) + ", ";
    }
    str += i + " * " + n + " = " + (i * n);

    console.log(str);
}