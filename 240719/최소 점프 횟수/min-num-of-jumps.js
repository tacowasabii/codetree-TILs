const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
const n = Number(input[0])
const arr = input[1].split(" ").map(Number)

let stack =[[0, 0]]
let ans = Number.MAX_SAFE_INTEGER
let flag = false

while (stack.length > 0){
    let [idx, num] = stack.pop()
    for (let i = 1; i <= arr[idx]; i++){
        if (idx < n - 1){
            stack.push([idx + i, num + 1])
        } else {
            ans = Math.min(ans, num)
            flag = true
        }
    }
}

if (flag){
    console.log(ans)
} else {
    console.log(-1)
}