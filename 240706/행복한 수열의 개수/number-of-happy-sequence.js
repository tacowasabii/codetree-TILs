const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
const [n, m] = input[0].split(" ").map(Number)
const matrix = input.slice(1).map((elem) => elem.split(" ").map(Number))
let ans = 0

for (let i = 0; i < n; i++){
    let nums = []
    let cnt = 1
    for (let j = 1; j < n; j++){
        if (matrix[i][j] !== matrix[i][j - 1]){
            nums.push(cnt)
            cnt = 1
        } else {
            cnt++
        }
    }
    nums.push(cnt)
    if (Math.max(...nums) >= m)
        ans++
        
    nums = []
    cnt = 1
    for (let j = 1; j < n; j++){
        if (matrix[j][i] !== matrix[j - 1][i]){
            nums.push(cnt)
            cnt = 1
        } else {
            cnt++
        }
    }
    nums.push(cnt)
    if (Math.max(...nums) >= m)
        ans++
}

console.log(ans)