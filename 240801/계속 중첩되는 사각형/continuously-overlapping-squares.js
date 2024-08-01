const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
const n = Number(input[0])
const rects = input.slice(1).map(line => line.split(" ").map(Number))
let color = ""
const points = {}
for (let i = 0; i < n; i++){
    if (i % 2 === 0){
        color = "red"
    } else {
        color = "blue"
    }
    const [x1, y1, x2, y2] = rects[i]
    for (let x = x1; x < x2; x++){
        for (let y = y1; y < y2; y++){
            points[[x, y]] = color
        }
    }
}

let cnt = 0
for (let v of Object.values(points)){
    if (v === "blue"){
        cnt += 1
    }
}

console.log(cnt)