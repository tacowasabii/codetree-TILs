function changePosition(n, row, col, direction) {
    const dirs = {'L': [0, -1], 'R': [0, 1], 'U': [-1, 0], 'D': [1, 0]};

    if (direction === 'L' && col === 1) {
        direction = 'R';
    } else if (direction === 'R' && col === n) {
        direction = 'L';
    } else if (direction === 'U' && row === 1) {
        direction = 'D';
    } else if (direction === 'D' && row === n) {
        direction = 'U';
    }

    row += dirs[direction][0];
    col += dirs[direction][1];

    return [row, col, direction];
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m, t] = input[0].split(" ").map(Number);

let balls = [];

for (let i = 1; i <= m; i++){
    [r, c, d, w] = input[i].split(" ")
    balls.push({r: Number(r), c: Number(c), d, w: Number(w), num: i})
}

for (let time = 0; time < t; time++){
    const newPositions = new Map();

    for (let ball of balls){
        const [newR, newC, newD] = changePosition(n, ball.r, ball.c, ball.d)
        ball.r = newR
        ball.c = newC
        ball.d = newD

        const key = `${newR},${newC}`
        
        if (newPositions.has(key)){
            newPositions.get(key).push(ball)
        } else {
            newPositions.set(key, [ball])
        }
    }
    
    const newBalls = []
    for (const group of newPositions.values()){
        if (group.length === 1){
            newBalls.push(group[0])
        } else {
            let totalWeight = 0, num = 0, idx = 0
            group.forEach((ball, index) => {
                totalWeight += ball.w
                if (ball.num > num){
                    num = ball.num
                    idx = index
                }
            })
            group[idx].w = totalWeight
            newBalls.push(group[idx])
        }
    }

    balls = newBalls
}

const remainingBallsCount = balls.length
const maxWeight = Math.max(...balls.map((ball) => ball.w))

console.log(remainingBallsCount, maxWeight);