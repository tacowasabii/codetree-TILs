const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let arr2d = Array(n).fill(0).map(() => Array(n).fill(0));
let num = 1;

for (let i = n - 1; i >= 0; i--){
    if (i % 2 === 1){
        for (let j = n - 1; j >= 0; j--){
            arr2d[j][i] = num
            num++
        }
    } else {
        for (let j = 0; j < n; j++){
            arr2d[j][i] = num
            num++
        }
    }
}

for (let elem of arr2d){
    console.log(elem.join(" "))
}