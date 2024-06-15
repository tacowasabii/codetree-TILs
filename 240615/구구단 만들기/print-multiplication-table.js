const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(arr[0])
let b = Number(arr[1])
let str = "";

for (let i = 1; i <= 9; i++) {
    str = "";
    for (let j = parseInt((b + 1) / 2) * 2; j >= a; j -= 2) {
        str += `${j} * ${i} = ${i * j}`;
        if (j !== a && j !== a + 1)
            str += " / ";
    }
    console.log(str);
}