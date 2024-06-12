const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");

let idx = 0

while(true){
    n = Number(arr[idx])
    if (n >= 5){
        console.log("Vacancy")
        break
    }else if(n === 1)
        console.log("John")
    else if(n === 2)
        console.log("Tom")
    else if(n === 3)
        console.log("Paul")
    else
        console.log("Sam")
    idx++
}