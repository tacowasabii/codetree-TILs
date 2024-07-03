const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = Number(input[0])
let matrix = input.slice(1).map((elem) => elem.split(" ").map(Number))
let ans = 0

for (let i = 0; i <= n - 3; i++){
    for (let j = 0; j <= n - 3; j++){
        let sum = 0
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                sum += matrix[i + x][j + y];
            }
        }
        ans = Math.max(sum, ans)
    }
}
console.log(ans)