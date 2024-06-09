const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");

let A = arr[0].split(" ")
let B = arr[1].split(" ")

let aAge = Number(A[0])
let aSex = A[1]
let bAge = Number(B[0])
let bSex = B[1]

if (aAge >= 19 && aSex == "M" || bAge >= 19 && bSex == "M")
    console.log("1")
else
    console.log("0")