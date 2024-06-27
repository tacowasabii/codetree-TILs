const fs = require("fs");
let [str, order] = fs.readFileSync(0).toString().trim().split("\n");

for (let elem of order){
    if (elem === "L"){
        str = str.slice(1) + str.slice(0, 1)
    } else {
        str = str.slice(-1) + str.slice(0, -1)
    }
}
console.log(str)