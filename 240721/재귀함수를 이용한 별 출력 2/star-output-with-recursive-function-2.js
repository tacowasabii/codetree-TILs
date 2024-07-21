const fs = require("fs")
const n = Number(fs.readFileSync(0).toString().trim())

function star(n){
    if (n == 0){
        return
    }
    let result = ""
    for (let i = 0; i < n; i++){
        result += "* "
    }
    console.log(result)
    star(n - 1)
    console.log(result)
}


star(n)