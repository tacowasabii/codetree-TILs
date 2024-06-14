const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(arr[0])
let b = Number(arr[1])

let str = "";

for (let i = 1; i <= a; i++) {
    str = "";
    for (let j = 1; j <= b; j++) {
        str += i * j + " ";
    }
    console.log(str);
}