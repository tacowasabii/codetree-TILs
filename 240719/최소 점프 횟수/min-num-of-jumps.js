const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
const n = Number(input[0])
const arr = input[1].split(" ").map(Number)

let stack =[[0, 0]]
let ans = Number.MAX_SAFE_INTEGER
let flag = false

while (stack.length > 0){
    let [idx, num] = stack.pop()
    // 점프하기 전에 먼저 도달했는지 검사를 해야 했는데 검사를 나중에 해서 도착지점인 0인곳에선 검사를 안해서 틀렸음
    if (idx === n - 1){
        ans = Math.min(ans, num)
        flag = true
    } else if (idx < n - 1){
        {
            for (let i = 1; i <= arr[idx]; i++){
                stack.push([idx + i, num + 1])
            } 
        }
    }
}

if (flag){
    console.log(ans)
} else {
    console.log(-1)
}