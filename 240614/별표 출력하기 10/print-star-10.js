const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let str = "";

for (let i = 0; i < n; i++) {
    str = "";
    if (i % 2 === 0) {
        for (let j = 0; j < i / 2 + 1; j++) {
            str += "* ";
        }
    }
    else {
        for (let j = 0; j < n - parseInt(i / 2); j++) {
            str += "* ";
        }
    }

    console.log(str);
}
for (let i = n - 1; i >= 0; i--) {
    str = "";
    if (i % 2 === 0) {
        for (let j = i / 2 + 1; j > 0; j--) {
            str += "* ";
        }
    }
    else {
        for (let j = 0; j < n - parseInt(i / 2); j++) {
            str += "* ";
        }
    }

    console.log(str);
}