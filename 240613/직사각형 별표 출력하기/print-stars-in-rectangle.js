const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(arr[0])
let m = Number(arr[1])

let str = "";

for (let i = 0; i < n; i++) {
    str = "";
    for (let j = 0; j < m; j++) {
        str += "* ";
    }
    console.log(str);
}