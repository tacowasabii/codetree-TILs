const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0])
let b = Number(input[1])
let cnt = 0

for (let i = a; i <= b; i++) {
    let sum = 0
    for (let j = 1; j < i; j++){
        if (i % j === 0)
            sum += j
    }
    if (sum === i){
        cnt++
    }
}
console.log(cnt)