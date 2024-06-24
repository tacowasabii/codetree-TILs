const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let cnt = 1
let arr2d = Array(n).fill(0).map(() => Array(cnt++).fill(0));

for (let i = 0; i < n; i++){
    for (let j = 0; j <= i; j++){
        if (j === 0 || j === i)
            arr2d[i][j] = 1
        else
            arr2d[i][j] = arr2d[i - 1][j - 1] + arr2d[i - 1][j]
    }
}


for (let elem of arr2d){
    console.log(elem.join(" "))
}