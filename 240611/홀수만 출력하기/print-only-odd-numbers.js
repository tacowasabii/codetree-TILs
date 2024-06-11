const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");

n = Number(arr[0])

for (let i = 1; i <= n; i++) {
        if (arr[i] % 2 === 1 && arr[i] % 3 ===0)
            console.log(arr[i])
    }