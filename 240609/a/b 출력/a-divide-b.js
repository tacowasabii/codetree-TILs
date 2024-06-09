const fs = require('fs');

let arr = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(arr[0])
let b = Number(arr[1])

let rest = a % b
let decimal  = ""

for (let i = 1; i <= 20; i++) {
    decimal += parseInt(rest * 10 / b)
    rest = (rest * 10) % b
}

console.log(`${parseInt(a / b)}.${decimal}`)