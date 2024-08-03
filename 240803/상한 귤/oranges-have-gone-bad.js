const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
const [n, k] = input[0].split(" ").map(Number)
const table = input.slice(1).map(line => line.split(" ").map(Number))
const result = Array.from({ length : n }, () => Array(n).fill(-1))
const queue = []

for (let i = 0; i < n; i++){
    for (let j = 0; j < n; j++){
        if (table[i][j] == 1){
            result[i][j] = -2
        } else if (table[i][j] == 2){
            result[i][j] = 0
            queue.push([i, j])
        }
    }
}

const dr = [1, 0, -1, 0]
const dc = [0, 1, 0, -1]
let time = 1

while (queue.length > 0){
    const tmp_queue = [...queue]
    const sets = new Set()
    while (tmp_queue.length > 0){
        const [r, c] = tmp_queue.shift()
        queue.shift()
        for (let i = 0; i < 4; i++){
            new_r = r + dr[i]
            new_c = c + dc[i]
            if (0 <= new_r && new_r < n && 0 <= new_c && new_c < n && result[new_r][new_c] === -2){
                sets.add([new_r, new_c])
            }
        }
    }
    for (let elem of sets){
        queue.push(elem)
        result[elem[0]][elem[1]] = time
    }
    time += 1
}

for (let line of result){
    console.log(line.join(" "))
}