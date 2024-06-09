const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split(" ")

let b = Number(arr[0])
let a = Number(arr[1])

let result = ""

while(b >= a){
    if (b % 2 == 0)
        result += (b + " ")
    b--
}

console.log(result)