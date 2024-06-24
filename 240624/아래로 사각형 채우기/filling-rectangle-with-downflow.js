const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let arr2d = Array(n).fill(0).map(() => Array(n).fill(0));

for (let i = 0; i < n; i++){
    for (let j = 0; j < n; j++){
        arr2d[i][j] = i + 1 + j * n
    }
}

for (let elem of arr2d){
    console.log(elem.join(" "))
}