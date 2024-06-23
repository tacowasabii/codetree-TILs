const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n\n");

let arr1 = input[0].split("\n").map(line => line.split(" ").map(Number))
let arr2 = input[1].split("\n").map(line => line.split(" ").map(Number))

for (let i = 0; i < 3; i++){
    let tmp = []
    for (let j = 0; j < 3; j++){
        tmp.push(arr1[i][j] * arr2[i][j])
    }
    console.log(tmp.join(" "))
}