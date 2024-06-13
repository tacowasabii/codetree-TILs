const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let str = "";

for(let k = 0; k < 2; k++){
    for (let i = 0; i < n; i++) {
        str = "";
        for (let j = 0; j < n; j++) {
            str += "*";
        }
        console.log(str);
    }
    console.log()
}