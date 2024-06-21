const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let countArr = Array(4).fill(0)

for (let elem of input){
    let tmp = elem.split(" ")
    let temp = Number(tmp[1])
    if (tmp[0] === "Y"){
        if (temp >= 37)
            countArr[0]++
        else
            countArr[2]++
    } else{
        if (temp >= 37)
            countArr[1]++
        else
            countArr[3]++
    }
}
if (countArr[0] >= 2)
    countArr.push("E")

console.log(countArr.join(" "))