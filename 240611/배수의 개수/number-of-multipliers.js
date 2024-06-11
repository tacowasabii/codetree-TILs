const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");
let cnt3 = 0
let cnt5 = 0

for (let i = 0; i < 10; i++) {
        if (arr[i] % 3 === 0)
            cnt3++;
        if (arr[i] % 5 === 0)
            cnt5++;
    }

console.log(cnt3, cnt5)