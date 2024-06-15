const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let str = "";

for (let i = 0; i < n; i++) {
    str = "";

    for (let j = 0; j < n; j++) {
        if (j % 2 === 0){
            str += i + 1
        } else {
            str += n - i
        }
    }

    console.log(str);
}