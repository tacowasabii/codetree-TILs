const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let arr = input.map(line => line.split(" ").map(Number));

let rowAverages = arr.map(row => {
    let sum = row.reduce((acc, num) => acc + num, 0);
    return (sum / row.length).toFixed(1);
});

let colAverages = [];
for (let i = 0; i < arr[0].length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
        sum += arr[j][i];
    }
    colAverages.push((sum / arr.length).toFixed(1));
}

let totalSum = arr.flat().reduce((acc, num) => acc + num, 0);
let totalAverage = (totalSum / (arr.length * arr[0].length)).toFixed(1);

console.log(rowAverages.join(" "));
console.log(colAverages.join(" "));
console.log(totalAverage);