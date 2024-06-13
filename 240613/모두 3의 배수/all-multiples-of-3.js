const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");

let satisfied = true;

for (let i = 0; i < 5; i++) {
    if (arr[i] % 3 !== 0) {
        satisfied = false;
    }
}

if (satisfied === true) {
    console.log(1);
}
else {
    console.log(0);
}