function josephusProblem(N, K) {
    const people = Array.from({ length: N }, (_, i) => i + 1);
    const result = [];
    let index = 0;

    while (people.length > 0) {
        index = (index + K - 1) % people.length;
        result.push(people.splice(index, 1)[0]);
    }

    return result;
}

// 입력 받기
const fs = require("fs");
const [N, K] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

// 조세퍼스 문제 해결
const result = josephusProblem(N, K);

// 결과 출력
console.log(result.join(" "));