const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("")
let stack = []
let flag = true

for (let elem of input){
    if (elem === '(')
        stack.push(elem)
    else {
        if (stack.length === 0){
            flag = false
            break
        }
        stack.pop()
    }
}

if (stack.length === 0 && flag)
    console.log("Yes")
else
    console.log("No")