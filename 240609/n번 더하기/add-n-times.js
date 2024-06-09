const fs = require('fs');

let arr = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(arr[0])
let n = Number(arr[1])

for (let i = 1; i <= n; i++) {
    a += n
    console.log(a);
}