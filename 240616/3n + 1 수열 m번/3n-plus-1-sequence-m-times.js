const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0])

for (let i = 1; i <= n; i++) {
    let x = Number(input[i])
    let cnt = 0
    while (x != 1){
        if (x % 2 === 0)
            x /= 2
        else
            x = x * 3 + 1
        cnt++
    }
    console.log(cnt)
}