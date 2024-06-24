let arr2d = Array(5).fill(0).map(() => Array(5).fill(0));

for (let i = 0; i < 5; i++){
    for (let j = 0; j < 5; j++){
        if (i === 0 || j === 0)
            arr2d[i][j] = 1
        else
            arr2d[i][j] = arr2d[i - 1][j] + arr2d[i][j - 1]
    }
}

for (let elem of arr2d){
    console.log(elem.join(" "))
}