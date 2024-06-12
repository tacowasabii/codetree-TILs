const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");

let idx = 0

while(true){
    n = Number(arr[idx])
    if (n === 25){
        console.log("Good")
        break
    }else if(n < 25){
        console.log("Higher")
    }else
        console.log("Lower")
    idx++
}