const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(arr[0])
let b = Number(arr[1])

let result = ""

if (a >= b) {
    for (let i = a; i >= b; i--) {
        result += (i + " ")
    }
} else {
    for (let i = b; i >= a; i--) {
        result += (i + " ")
    }
}

console.log(result);