const fs = require("fs");
let [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let arr2d = Array(n).fill(0).map(() => Array(m).fill(0));
let num = 1;
let x = 0, y = 0;

while(true){
    arr2d[y][x] = num
    num++
    if (x === m - 1 && y === n - 1)
        break
    x -= 1
    y += 1
    if (x < 0 || y >= n){
        x = y + x + 1 
        y = 0
        if (x >= m){
            tmp = x - m + 1
            x -= tmp
            y += tmp
        }
    }
}

for (let elem of arr2d){
    console.log(elem.join(" "))
}