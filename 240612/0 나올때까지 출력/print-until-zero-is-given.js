const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");

let idx = 0

while(true){
    if (arr[idx] === "0")
        break
    console.log(arr[idx])
    idx++
}