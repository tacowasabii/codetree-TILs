const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");
let cnt = 0

for (i = 0; i < 5; i++){
    if (arr[i] % 2 == 0)
        cnt ++;
}

console.log(cnt)