const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let [n, q] = input[0].split(" ").map(Number)
let nums = input[1].split(" ").map(Number)

for (let i = 2; i < q + 2; i++){
    let arr = input[i].split(" ").map(Number)

    if (arr[0] === 1){
        console.log(nums[arr[1] - 1])
    } else if (arr[0] === 2){
        idx = nums.indexOf(arr[1])
        
        if (idx !== -1){
            console.log(idx + 1)
        } else{
            console.log(0)
        }
    } else {
        console.log(nums.slice(arr[1] - 1, arr[2]).join(" "))
    }
}