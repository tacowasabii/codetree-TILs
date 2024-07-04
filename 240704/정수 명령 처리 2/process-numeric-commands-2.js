const fs = require("fs");

// Queue 클래스 정의
class Queue {
    constructor() {  // 빈 큐 하나를 생성합니다.
        this.q = [];
    }

    push(item) {  // 큐의 맨 뒤에 데이터를 추가합니다.
        this.q.push(item);
    }

    empty() {  // 큐가 비어있으면 true를 반환합니다.
        return this.q.length === 0;
    }

    size() {  // 큐에 들어있는 데이터 수를 반환합니다.
        return this.q.length;
    }

    pop() {  // 큐의 맨 앞에 있는 데이터를 반환하고 제거합니다.
        if (this.empty()) {
            throw new Error("Queue is empty");
        }
        return this.q.shift();
    }

    front() {  // 큐의 맨 앞에 있는 데이터를 제거하지 않고 반환합니다.
        if (this.empty()) {
            throw new Error("Queue is empty");
        }
        return this.q[0];
    }
}

// 파일에서 입력 읽기
const input = fs.readFileSync(0).toString().trim().split("\n");
const commandCount = Number(input[0]);
const commands = input.slice(1, commandCount + 1);

function processCommands(commands) {
    const q = new Queue();
    const results = [];

    commands.forEach(command => {
        const parts = command.split(' ');
        if (parts[0] === 'push') {
            q.push(parseInt(parts[1], 10));
        } else if (parts[0] === 'pop') {
            results.push(q.pop());
        } else if (parts[0] === 'size') {
            results.push(q.size());
        } else if (parts[0] === 'empty') {
            results.push(q.empty() ? 1 : 0);
        } else if (parts[0] === 'front') {
            results.push(q.front());
        }
    });

    return results;
}

const outputResults = processCommands(commands);
outputResults.forEach(result => {
    console.log(result);
});