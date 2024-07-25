const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i++) {
    let [h, w] = input[i].split(" ").map(Number);
    arr.push({ height: h, weight: w , num: i});
}

arr.sort((a, b) => a.height - b.height); 

let result = [arr[0]]
for (let i = 1; i < arr.length; i++){
    if (arr[i].height !== result.at(-1).height){
        result.sort((a, b) => b.weight - a.weight)
        for (let elem of result){
            console.log(elem.height, elem.weight, elem.num)
        }
        result.length = 0
    } 
    result.push(arr[i])
}
for (let elem of result){
    console.log(elem.height, elem.weight, elem.num)
}