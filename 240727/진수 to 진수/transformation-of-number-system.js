const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")

const [a, b] = input[0].split(" ").map(Number)
const n = input[1]
let tmp = 0

for (let i = 0; i < n.length; i++){
    tmp += a ** i * n[n.length - i - 1]
}

ans = ""

while (tmp >= b){
    ans = String(tmp % b) + ans
    tmp = parseInt(tmp / b)
}
ans = String(tmp) + ans
console.log(ans)