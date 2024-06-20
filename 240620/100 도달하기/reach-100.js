const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let arr = [1, n]

while(true){
    let num = arr.at(-2) + arr.at(-1)
    arr.push(num)
    if (num > 100)
        break
}
console.log(arr.join(" "))