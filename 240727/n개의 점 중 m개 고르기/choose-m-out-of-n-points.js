function* combination(arr, m) {
    if (m === 0) {
        yield [];
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let rest_arr = arr.slice(i + 1);
        for (let elem of combination(rest_arr, m - 1)) {
            yield [num].concat(elem);
        }
    }
}

function distance(point1, point2){
    return (point1[0] - point2[0]) ** 2 + (point1[1] - point2[1]) ** 2
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const points = input.slice(1).map(point => point.split(" ").map(Number));
let ans = Number.MAX_SAFE_INTEGER

for (let comb of combination(points, m)){
    let dist = 0
    for (let i = 0; i < comb.length; i++){
        for (let j = i + 1; j < comb.length; j++){
            dist = Math.max(dist, distance(comb[i], comb[j]))
        }
    }
    ans = Math.min(ans, dist)
}

console.log(ans)