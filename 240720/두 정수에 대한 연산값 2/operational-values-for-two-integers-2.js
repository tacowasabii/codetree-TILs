const fs = require("fs")
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

function solution(a, b){
    if (a > b){
        return [a * 2, b + 10]
    } else if (a < b){
        return [a + 10, b * 2]
    } else {
        return [a, b]
    }
}

[a, b] = solution(a, b)
console.log(a, b)