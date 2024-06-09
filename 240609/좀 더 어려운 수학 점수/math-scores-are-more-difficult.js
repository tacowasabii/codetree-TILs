const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");

let A_score = arr[0].split(" ")
let B_score = arr[1].split(" ")

let am = Number(A_score[0])
let ae = Number(A_score[1])
let bm = Number(B_score[0])
let be = Number(B_score[1])

if (am > bm || am == bm && ae > be)
    console.log("A")
else
    console.log("B")