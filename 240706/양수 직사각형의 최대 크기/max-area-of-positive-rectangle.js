const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
const [n, m] = input[0].split(" ")
const table = input.slice(1).map(line => line.split(" ").map(Number));
[3, 6, 7, -4, 1],
[6, 1, 8, 15, -5,],
[3, -5, 1, 16, 3]]
let ans = 0

for (let i = 1; i <= n; i++){
    for (let j = 1; j <= m; j++){
        for (let row = 0; row < n - i + 1; row++){
            for (let col = 0; col < m - j + 1; col++){
                flag = true
                for (let k = row; k < row + i; k++){
                    for (let l = col; l < col + j; l++){
                        if (table[k][l] <= 0)
                            flag = false
                    }
                }
                if (flag)
                    ans = Math.max(ans, i * j)
            }
        }
    }
}
console.log(ans)