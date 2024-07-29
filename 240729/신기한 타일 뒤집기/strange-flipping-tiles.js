const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
const n = Number(input[0])
const arr = []
for (let i = 1; i <= n; i++)[
    arr.push(input[i].split(" "))
]

const dict = {}

let pos = 0

for (let elem of arr){
    const num = Number(elem[0])
    const dir = elem[1]

    if (dir === 'R'){
        for (let i = pos; i < pos + num; i++){
            dict[i] = "B"
        }
        pos += num - 1
    } else {
        for (let i = pos; i > pos - num; i--){
            dict[i] = "W"
        }
        pos -= num - 1
    }
}

let [countW, countB] = [0, 0];

for (let v of Object.values(dict)){
    if (v === "B"){
        countB += 1
    } else {
        countW += 1
    }
}

console.log(countW, countB)