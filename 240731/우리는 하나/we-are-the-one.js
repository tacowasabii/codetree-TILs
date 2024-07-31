function combination(arr, num){
  const res = [];
  if(num === 0) 
        return [[]];
  arr.forEach((v, i) => {
    const rest = arr.slice(i + 1)
    const combs = combination(rest, num - 1)
    const attach = combs.map((comb) => [v, ...comb])
    res.push(...attach)
  })
  return res;
}

function bfs(isVisited, matrix, pos, u, d, n){
    const dr = [0, -1, 0, 1]
    const dc = [1, 0, -1, 0]

    const queue = [pos]
    isVisited[pos[0]][pos[1]] = true
    while (queue.length > 0){
        const city = queue.shift()
        const h1 = matrix[city[0]][city[1]]
        for (let k = 0; k < 4; k++){
            new_r = city[0] + dr[k]
            new_c = city[1] + dc[k]
            if (0 <= new_r && new_r < n && 0 <= new_c && new_c < n && !isVisited[new_r][new_c]){
                const diff = Math.abs(h1 - matrix[new_r][new_c])
                if (u <= diff && diff <= d){
                    isVisited[new_r][new_c] = true
                    queue.push([new_r, new_c])
                }
            }
        }
    }
}

const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
const [n, k, u, d] = input[0].split(" ").map(Number)
const cities = input.slice(1).map(line => line.split(" ").map(Number))

const positions = []
for (let i = 0; i < n; i++){
    for (let j = 0; j < n; j++){
        positions.push([i, j])
    }
}
const selectedCities = combination(positions, k)
let max = 0

for (let elem of selectedCities){
    const isVisited = Array.from({ length : n }, () => Array(n).fill(false))
    for (let elem2 of elem){
        const isVisited2 = Array.from({ length : n }, () => Array(n).fill(false))
        bfs(isVisited2, cities, elem2, u, d, n)
        for (let i = 0; i < n; i++){
            for (let j = 0; j < n; j++){
                if (isVisited2[i][j]){
                    isVisited[i][j] = true
                }
            }
        }
    }
    
    let cnt = 0
    isVisited.forEach((line) => {
        for (let bool of line){
            if (bool){
                cnt += 1
            }
        }
    })
    max = Math.max(max, cnt)
}

console.log(max)