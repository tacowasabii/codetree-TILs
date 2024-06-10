const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");
let char = arr[0]
let n = Number(arr[1])

let result = ""

if (char === 'A') {
    for (let i = 1; i <= n; i++) {
        result += (i + " ")
    }
} else {
    for (let i = n; i > 0; i--) {
        result += (i + " ")
    }
}
console.log(result);