const fs = require("fs")
let n = Number(fs.readFileSync(0).toString().trim())

let result = ""

for (n; n <= 100; n++) {
    result += (n + " ");
}

console.log(result)