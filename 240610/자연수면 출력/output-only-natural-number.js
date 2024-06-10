const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(arr[0])
let b = Number(arr[1])

let result = ""

if (a > 0) {
    for (let i = 0; i < b; i++) {
        result += a
    }
} else {
    result = 0
}

console.log(result);