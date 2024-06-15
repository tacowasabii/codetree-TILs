const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let str = "";
let cnt = 0;

for (let i = 0; i < n; i++) {
    str = "";

    if (i % 2 === 0){
        for (let j = 1; j <= n; j++) {
            cnt++
            str += cnt + " "
        } 
    } else {
        for (let j = 0; j < n; j++) {
            cnt += 2
            str += cnt + " "
        } 
    }
   
    console.log(str);
}