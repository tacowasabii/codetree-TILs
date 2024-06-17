const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let cnt = 0

for (let i = 1; i <= n; i++){
    let tmp = input[i].split(" ").map(Number)
    let sum = 0

    for(let elem of tmp){
        sum += elem
    }
    if (sum / 4 >= 60){
        console.log("pass")
        cnt++
    }
    else
        console.log("fail")
}
console.log(cnt)