const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
input.forEach((elem, idx) => {
    if (idx % 2 === 0)
        console.log(elem)
})