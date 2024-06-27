const fs = require("fs");
let str = fs.readFileSync(0).toString().trim(); 

if (str === 'a')
    console.log('z')
else
    console.log(String.fromCharCode(str.charCodeAt() - 1))