const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let arr = input[1].split(" ").map(Number);
let frequency = {};

for (let elem of arr) {
    if (frequency[elem]) {
        frequency[elem]++;
    } else {
        frequency[elem] = 1;
    }
}

let maxUnique = -1;
for (let num in frequency) {
    if (frequency[num] === 1 && Number(num) > maxUnique) {
        maxUnique = Number(num);
    }
}

console.log(maxUnique);