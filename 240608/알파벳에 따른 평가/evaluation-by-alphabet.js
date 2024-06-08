const fs = require("fs");
let a = fs.readFileSync(0).toString().trim();

if (a == "S") {
    console.log("Superior");
} 
else if (a == "A") {
    console.log("Excellent");
} 
else if (a == "B") {
    console.log("Good");
} 
else if (a == "C") {
    console.log("Usually");
} 
else if (a == "D") {
    console.log("Effort");
} 
else {
    console.log("Failure");
}