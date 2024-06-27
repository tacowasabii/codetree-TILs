const fs = require("fs");
let str = fs.readFileSync(0).toString().trim(); 

if (str === 'z')
    console.log('a')
else
    console.log(String.fromCharCode(str.charCodeAt() + 1))