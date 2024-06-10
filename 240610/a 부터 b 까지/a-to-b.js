const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(arr[0])
let b = Number(arr[1])

let result = ""

for (i = a; i <= b;){
    result += (i + " ")
    if (i % 2 === 0)
        i += 3
    else
        i *= 2
}


console.log(result);