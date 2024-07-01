const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let max_pos = String(Math.max(...arr)).length;

for (let i = 0; i < max_pos; i++) {

    let buckets = Array.from({ length: 10 }, () => []);

    for (let num of arr) {
        let digit = Math.floor(num / Math.pow(10, i)) % 10;
        buckets[digit].push(num);
    }

    arr = [].concat(...buckets);
}

console.log(arr.join(" "));