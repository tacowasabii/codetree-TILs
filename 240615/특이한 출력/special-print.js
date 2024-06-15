const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let str = "";

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        str += `(${i}, ${j}) `;
        if ((i + j) % 4 === 0){
            console.log(str)
            str = ""
        }
    }
}
console.log(str)