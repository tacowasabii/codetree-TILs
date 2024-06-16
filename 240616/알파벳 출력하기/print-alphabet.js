const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let str = ""
let index = 'A'.charCodeAt();

for (i = 0; i < n; i++){
    str = ""
    for (j = 0; j <= i; j++){
        str += String.fromCharCode(index);
        index++
        if (index > 'Z'.charCodeAt()){
            index = 'A'.charCodeAt();
        }
    }
    console.log(str)
}