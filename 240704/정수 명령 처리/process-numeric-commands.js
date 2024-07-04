const fs = require("fs");

// Stack 클래스 정의
class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    empty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    pop() {
        if (this.empty()) {
            throw new Error("Stack is empty");
        }
        return this.items.pop();
    }

    top() {
        if (this.empty()) {
            throw new Error("Stack is empty");
        }
        return this.items[this.items.length - 1];
    }
}

const input = fs.readFileSync(0).toString().trim().split("\n");
const commandCount = Number(input[0]);
const commands = input.slice(1, commandCount + 1);

function processCommands(commands) {
    const s = new Stack();
    const results = [];

    commands.forEach(command => {
        const parts = command.split(' ');
        if (parts[0] === 'push') {
            s.push(parseInt(parts[1], 10));
        } else if (parts[0] === 'pop') {
            results.push(s.pop());
        } else if (parts[0] === 'size') {
            results.push(s.size());
        } else if (parts[0] === 'empty') {
            results.push(s.empty() ? 1 : 0);
        } else if (parts[0] === 'top') {
            results.push(s.top());
        }
    });

    return results;
}

const outputResults = processCommands(commands);
outputResults.forEach(result => {
    console.log(result);
});