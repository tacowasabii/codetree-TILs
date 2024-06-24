const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number)
let arr2d = Array(n).fill(0).map(() => Array(n).fill(0));
let num = 1

for (let i = 1; i <= m; i ++){
    let [r, c] = input[i].split(" ").map(Number)
    arr2d[r - 1][c - 1] = num
    num++
}

for (let elem of arr2d){
    console.log(elem.join(" "))
}