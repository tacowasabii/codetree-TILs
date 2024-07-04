const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("")
let stack = []

for (let elem of input){
    if (elem === '(')
        stack.push(elem)
    else {
        if (stack.length === 0){
            console.log("No")
            break
        }
        stack.pop()
    }
}

if (stack.length === 0)
    console.log("Yes")
else
    console.log("No")