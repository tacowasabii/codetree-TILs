const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");

let a = arr[0].split(" ")
let b = arr[1].split(" ")
let c = arr[2].split(" ")

if (a[0] === "Y" && Number(a[1]) >= 37){
    if (b[0] === "Y" && Number(b[1]) >= 37 || c[0] === "Y" && Number(c[1]) >= 37)
        console.log("E")
    else
        console.log("N")
} else {
    if (b[0] === "Y" && Number(b[1]) >= 37 && c[0] === "Y" && Number(c[1]) >= 37)
        console.log("E")
    else
        console.log("N")
}