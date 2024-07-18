function solution(n, m){
    let num = 1
    for (let i = 1; i <= Math.min(n, m); i++){
        if (n % i === 0 && m % i === 0){
            num = i
        }
    }
    console.log(n * m / num)
}

const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

solution(input[0], input[1])