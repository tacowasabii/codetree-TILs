const fs = require("fs");
let [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let arr = Array(n).fill(0).map(() => Array(m).fill(0))
let num = 1

for (let i = 0; i < n; i++){
    for (let j = 0; j < m; j++){
        arr[i][j] = num
        num++
    }
    console.log(arr[i].join(" "))
}