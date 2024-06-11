const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");
let cnt = 0

for (let i = 0; i < 10; i++) {
        if (arr[i] % 2 === 1)
            cnt++;
    }

console.log(cnt)