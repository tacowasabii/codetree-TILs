const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");
h = Number(arr[0])
w = Number(arr[1])

bmi = 10000 * w / (h * h)
console.log(parseInt(bmi))

if (bmi >= 25)
    console.log("Obesity")