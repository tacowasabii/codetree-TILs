function bomb(arr, n, row, col){
    let arr_copy = arr.map(row => row.slice());
    let power = arr_copy[row][col];

    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            if ((i > row - power && i < row + power && j === col) || (j > col - power && j < col + power && i === row))
                arr_copy[i][j] = 0
        }
    }

    for (let j = 0; j < n; j++){
        let tmp = []
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

for (let i = 0; i < n; i++){
    for (let j = 0; j < n; j++){
        let new_arr = bomb(arr, n, i, j)
        let cnt = 0
        for (let x = 0; x < n; x++) { 
            for (let y = 0; y < n - 1; y++) { 
                if (new_arr[x][y] !== 0 && new_arr[x][y] === new_arr[x][y + 1]) {
                    cnt++;
                }
                if (new_arr[y][x] !== 0 && new_arr[y][x] === new_arr[y + 1][x]) {
                    cnt++;
                }
            }
        }
        ans = Math.max(ans, cnt)
    }
}

console.log(ans)