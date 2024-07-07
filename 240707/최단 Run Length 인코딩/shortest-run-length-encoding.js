function RLE(arr) {
    let ans = ""
    let alp = arr[0]
    let cnt = 1
    for (let i = 1; i < arr.length; i++){
        if (arr[i] != arr[i - 1]){
            ans += alp
            ans += cnt
            alp = arr[i]
            cnt = 1
        } else {
            cnt++
        }
    }
    ans += alp
    ans += cnt

    return ans
}

const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("")
let len = input.length

for (let i = 0; i < input.length; i++){
    len = Math.min(len, RLE(input.slice(input.length - i).concat(input.slice(0, input.length - i))).length)
}

console.log(len)