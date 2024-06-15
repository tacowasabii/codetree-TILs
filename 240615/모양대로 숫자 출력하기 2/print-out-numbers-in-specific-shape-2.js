const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let str = "";
let cnt = 2;

for (let i = 0; i < n; i++) {
    str = "";
    for (let j = 0; j < n; j++) {
        str += cnt + " ";
        cnt += 2;
        if (cnt === 10)
            cnt = 2
    }
    console.log(str);
}