const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let numbers = input[1].split(" ").join(""); 

for (let i = 0; i < numbers.length; i += 5) {
  console.log(numbers.slice(i, i + 5));
}