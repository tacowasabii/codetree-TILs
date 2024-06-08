const fs = require("fs");
let a = Number(fs.readFileSync(0).toString().trim());

if (a >= 3000) {
    console.log("book");
} 
else if (a >= 1000) {
    console.log("mask");
} 
else {
    console.log("no");
}