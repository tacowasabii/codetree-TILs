const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);

let str = "";

for (let i = 2; i <= 8; i += 2) {
    str = "";
    for (let j = b; j >= a; j--) {
        str += `${j} * ${i} = ${i * j}`;
        if (j !== a) {
            str += " / ";
        }
    }
    console.log(str);
}