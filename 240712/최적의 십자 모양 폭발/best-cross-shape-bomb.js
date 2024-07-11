function bomb(arr, n, row, col){
    arr_copy = JSON.parse(JSON.stringify(arr))
    power = arr_copy[row][col]
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            if ((i > row - power && i < row + power && j === col) || (j > col - power && j < col + power && i === row))
                arr_copy[i][j] = 0
        }
    }

    for (let j = 0; j < n; j++){
        tmp = []
        for (let i = 0; i < n; i++){
            if (arr_copy[i][j] !== 0){
                tmp.push(arr_copy[i][j])
            }
        }
        tmp = Array(n - tmp.length).fill(0).concat(tmp)
        for (let k = 0; k < n; k++){
            arr_copy[k][j] = tmp[k]
        }
    }
    return arr_copy
}

const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
const n = Number(input[0])
let arr = input.slice(1).map((line) => line.split(" ").map(Number))
let ans = 0
let new_arr

for (let i = 0; i < n; i++){
    for (let j = 0; j < n; j++){
        new_arr = bomb(arr.slice(), n, i, j)
        let cnt = 0
        for (let i = 0; i < n; i++){
            for (let j = 0; j < n - 1; j++){
                if (new_arr[i][j] !== 0 && new_arr[i][j] === new_arr[i][j + 1])
                    cnt++
                if (new_arr[j][i] !== 0 && new_arr[j][i] === new_arr[j + 1][i])
                    cnt++
            }
        }
        ans = Math.max(ans, cnt)
        cnt = 0
    }
}

console.log(ans)