function pibonacci(n){
    if (n <= 2){
        return 1
    }
    return pibonacci(n - 2) + pibonacci(n - 1)
}

const fs = require("fs")
const n = Number(fs.readFileSync(0).toString().trim())

console.log(pibonacci(n))