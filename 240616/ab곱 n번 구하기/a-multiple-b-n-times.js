const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0])

for (let i = 1; i <= n; i++) {
    let x = input[i].split(" ");
    let a = Number(x[0]);
    let b = Number(x[1]);

    let prod = 1;
    for (let i = a; i <= b; i++) {
        prod *= i;
    }
    console.log(prod);
}