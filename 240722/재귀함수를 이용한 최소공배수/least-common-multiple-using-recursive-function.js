function commonMultiple(a, b){
    let ans = 0
    for (let i = 1; i <= Math.min(a, b); i++){
        if (a % i === 0 && b % i === 0){
            ans = i
        }
    }

    return a * b / ans
}

function solution(arr){
    const a = arr.pop()
    const b = arr.pop()
    if (arr.length === 0){
        return commonMultiple(a, b)
    } else {
        arr.push(commonMultiple(a, b))
        return solution(arr)
    }
}

const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
const n = Number(input[0])
const nums = input[1].split(" ").map(Number)

console.log(solution(nums))