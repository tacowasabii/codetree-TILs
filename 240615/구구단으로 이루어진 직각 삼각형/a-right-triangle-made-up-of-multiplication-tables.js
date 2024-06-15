const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let str = "";

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
        str += `${i} * ${j} = ${i * j}`;
        if (j <= n - i){
            str += " / "
        }
    }
    console.log(str)
    str = ""
}