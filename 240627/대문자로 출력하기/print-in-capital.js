const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(""); 
let ans = ""

for (let elem of input){
    let code = elem.charCodeAt(0);
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      if (code >= 97 && code <= 122) {
        elem = String.fromCharCode(code - 32);
      }
      ans += elem;
    }
}

console.log(ans)