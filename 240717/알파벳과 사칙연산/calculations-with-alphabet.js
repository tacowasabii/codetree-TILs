function permutation(n){
    let arr = [[1], [2], [3], [4]]

    for (let i = 1; i < n; i++){
        new_arr = []
        for (let j = 1; j <= 4; j++){
            arr.forEach(elem => {
                tmp = elem.slice()
                tmp.push(j)
                new_arr.push(tmp)
            })
        }
        arr = new_arr
    }
    return arr
}

function calc(expression){
    const tokens = expression.split('');

    let result = Number(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const nextNumber = Number(tokens[i + 1]);

        if (operator === '+') {
            result += nextNumber;
        } else if (operator === '-') {
            result -= nextNumber;
        } else if (operator === '*') {
            result *= nextNumber;
        } else if (operator === '/') {
            result /= nextNumber;
        }
    }

    return result;
}

const fs = require("fs")
const input = fs.readFileSync(0).toString().trim()

const alp = new Map()
let idx = 0

for (let elem of input){
    if (elem.charCodeAt(0) >= 'a'.charCodeAt(0) && elem.charCodeAt(0) <= 'f'.charCodeAt(0)){
        if (!alp.has(elem)){
            alp.set(elem, idx)
            idx++
        }
    }
}

const perms = permutation(alp.size)
let ans = Number.MIN_SAFE_INTEGER

for (let perm of perms){
    exp = ""
    for (let elem of input){
        if (alp.has(elem)){
            exp += String(perm[alp.get(elem)])
        } else {
            exp += elem
        }
    }
    ans = Math.max(ans, calc(exp))
}

console.log(ans)