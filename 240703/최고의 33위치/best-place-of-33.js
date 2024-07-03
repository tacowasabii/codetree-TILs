const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = Number(input[0])
let matrix = input.slice(1).map((elem) => elem.split(" ").map(Number))
let ans = 0

for (let i = 0; i <= n - 3; i++){
    for (let j = 0; j <= n - 3; j++){
        let sum = 0
        matrix.slice(i, i + 3).forEach((elem) => {
            sum += elem.slice(j, j + 3).reduce((acc, val) => acc + val, 0)
        })
        ans = Math.max(sum, ans)
    }
}
console.log(ans)