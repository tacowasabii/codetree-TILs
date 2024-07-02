const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

function quick_sort(arr){
    if (arr.length <= 1){
        return arr
    }
    let pivot = arr[Math.floor(arr.length / 2)]
    let lesser = []
    let middle = []
    let greater = []

    for (let elem of arr){
        if (elem < pivot)
            lesser.push(elem)
        else if (elem > pivot)
            greater.push(elem)
        else
            middle.push(elem)
    }
    return quick_sort(lesser).concat(middle).concat(quick_sort(greater))
}

console.log(quick_sort(arr).join(" "));