const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(""); 
let result = "";
  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    let code = char.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(code + 32);
    }
    else if (code >= 97 && code <= 122) {
      result += String.fromCharCode(code - 32);
    }
  }

console.log(result)