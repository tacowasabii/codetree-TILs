const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");

let idx = 0

while(true){
    let info = arr[idx].split(" ")
    console.log(info[0] * info[1])
    if (info[2] === "C"){
        break
    }
    idx++
}