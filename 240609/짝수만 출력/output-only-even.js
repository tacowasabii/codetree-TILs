const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split(" ")

let a = Number(arr[0])
let b = Number(arr[1])

let result = ""

while(a <= b){
    if (a % 2 == 0)
        result += (a + " ")
    a++
}

console.log(result)