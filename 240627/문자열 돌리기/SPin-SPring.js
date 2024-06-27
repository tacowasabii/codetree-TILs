const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let str = input

while(true){
    console.log(str)
    str = str.slice(-1) + str.slice(0, -1)
    if (str === input){
        console.log(str)
        break
    }   
}