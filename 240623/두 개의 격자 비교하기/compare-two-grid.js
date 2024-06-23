const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);

let grid1 = [];
for (let i = 1; i <= n; i++) {
    grid1.push(input[i].split(" ").map(Number));
}

let grid2 = [];
for (let i = n + 1; i <= 2 * n; i++) {
    grid2.push(input[i].split(" ").map(Number));
}

let resultGrid = [];
for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < m; j++) {
        if (grid1[i][j] !== grid2[i][j]) {
            row.push(1);
        } else {
            row.push(0);
        }
    }
    resultGrid.push(row);
}

for (let i = 0; i < n; i++) {
    console.log(resultGrid[i].join(" "));
}