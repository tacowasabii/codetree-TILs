const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let [str, n] = input[0].split(" ")

for (let i = 1; i <= Number(n); i++){
    num = Number(input[i])

    if (num === 1){
        str = str.slice(1) + str.slice(0, 1)
    } else if (num === 2){
        str = str.slice(-1) + str.slice(0, -1)
    } else {
        str = str.split('').reverse().join('')
    }
    console.log(str)
}