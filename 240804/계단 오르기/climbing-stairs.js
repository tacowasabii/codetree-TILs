const fs = require("fs")
const n = Number(fs.readFileSync(0).toString().trim())

const dp = [0, 0, 1, 1]

for (let i = 4; i <= n; i++){
    dp.push(dp[i - 2] + dp[i - 3])
}

console.log(dp[n] % 10007)