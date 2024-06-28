const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
 
input.map((elem) => {
    if (elem !== 'END')
        console.log(elem.split("").reverse().join(""))
})