const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let even = 0, odd = 0

for (let i = 0; i < 10; i++){
    if (i % 2 === 0)
        even += arr[i]
    else
        odd += arr[i]
}

console.log(Math.max(even, odd) - Math.min(even, odd))