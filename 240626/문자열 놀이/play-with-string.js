const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let arr = input[0].split(" ")[0].split("")
let n = Number(input[0].split(" ")[1])

for (let i = 1; i <= n; i++){
    let [num, a, b] = input[i].split(" ")

    if (Number(num) === 1){
        [arr[a - 1], arr[b - 1]] = [arr[b - 1], arr[a - 1]]
    } else {
        for (let i = 0; i < arr.length; i++){
            if (arr[i] === a)
                arr[i] = b
        }
    }
    console.log(arr.join(""))
}