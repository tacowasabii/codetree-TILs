const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
const n = Number(input[0])
const matrix = input.slice(1).map(line => line.split(" ").map(Number))

function changeDir(dir, n) {
    if (n === 1) {
        if (dir[0] === 0 && dir[1] === -1) 
            dir = [-1, 0]; 
        else if (dir[0] === -1 && dir[1] === 0)
            dir = [0, -1];
        else if (dir[0] === 0 && dir[1] === 1) 
            dir = [1, 0]; 
        else if (dir[0] === 1 && dir[1] === 0) 
            dir = [0, 1]; 
    } else if (n === 2) {
        if (dir[0] === 0 && dir[1] === -1) 
            dir = [1, 0]; 
        else if (dir[0] === -1 && dir[1] === 0) 
            dir = [0, 1]; 
        else if (dir[0] === 0 && dir[1] === 1) 
            dir = [-1, 0]; 
        else if (dir[0] === 1 && dir[1] === 0) 
            dir = [0, -1]; 
    }
    return dir;
}

function time(x, y, dir){
    let t = 1

    while(x >= 0 && x < n && y >= 0 && y < n){
        dir = changeDir(dir, matrix[y][x])
        x += dir[0]
        y -= dir[1]
        t++
    }
    return t
}

for (let i = 0; i < n; i++){
    ans = Math.max(time(i, 0, [1, 0]), time(n - 1, 0, [0, 1]), time(i, n - 1, [-1, 0]), time(0, i, [1, 0]), ans)
}
console.log(ans)