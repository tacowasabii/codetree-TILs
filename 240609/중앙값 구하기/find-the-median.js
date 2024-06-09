const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(arr[0])
let b = Number(arr[1])
let c = Number(arr[2])

if (a > b){
    if (b > c)
        console.log(b)
    else if (a > c)
        console.log(c)
    else
        console.log(a)
} else {
    if (a > c)
        console.log(a)
    else if (b > c)
        console.log(c)
    else
        console.log(b)
}