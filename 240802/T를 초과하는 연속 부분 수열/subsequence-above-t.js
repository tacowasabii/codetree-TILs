const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
const [n, t] = input[0].split(" ").map(Number)
const nums = input[1].split(" ").map(Number)
let max = 0

for (let i = 0; i < n; i++){
    let len = 0
    for (let j = i; j < n; j++){
        if (nums[j] > t){
            len += 1
        } else {
            break
        }
    }
    max = Math.max(max, len)
}

console.log(max)