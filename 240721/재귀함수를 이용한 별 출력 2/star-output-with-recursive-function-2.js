const fs = require("fs")
const n = Number(fs.readFileSync(0).toString().trim())

function starDesc(n){
    if (n == 1){
        console.log("*")
        return
    }
    result = ""
    for (let i = 0; i < n; i++){
        result += "* "
    }
    console.log(result)
    starDesc(n - 1)
}

function starAsc(j, n){
    result = ""
    for (let i = 0; i < j; i++){
        result += "* "
    }
    console.log(result)
    if (j == n){
        return
    }
    starAsc(j + 1, n)
}


starDesc(n)
starAsc(1, n)