const fs = require("fs")
const n = Number(fs.readFileSync(0).toString().trim())

const pibo = [0, 1, 1]

if (n <= 2){
    console.log(pibo[n])
} else{
    for (let i = 3; i <= n; i++){
        pibo.push(pibo[i - 1] + pibo[i - 2])
    }
    console.log(pibo[n])
}