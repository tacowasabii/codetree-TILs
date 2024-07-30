const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
const n = Number(input[0])
const matrix = input.slice(1).map(line => line.split(" ").map(Number))
const isVisited = Array.from({ length: n }, () => Array(n).fill(false));
let max = 0
let cnt = 0

const dx = [0, 1, 0, -1]
const dy = [1, 0, -1, 0]

for (let i = 0; i < n; i++){
    for (let j = 0; j < n; j++){
        if (!isVisited[i][j]){
            let len = 1
            const dfs = [[i,j]]
            isVisited[i][j] = true
            const num = matrix[i][j]
            while (dfs.length > 0){
                const block = dfs.pop()
                const [r, c] = block
                for (let k = 0; k < 4; k++){
                    const [dr, dc] = [r + dx[k], c + dy[k]]
                    if (0 <= dr && dr < n && 0 <= dc && dc < n && matrix[dr][dc] === num && !isVisited[dr][dc]){
                        isVisited[dr][dc] = true
                        dfs.push([dr, dc])
                        len += 1
                    }
                }
            }
            if (len > 1){
                max = Math.max(max, len)
                cnt += 1
            }
        }
    }
}

console.log(cnt, max)