const fs = require('fs');

// Node와 Deque 클래스 정의
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Deque {
    constructor() {
        this.count = 0;
        this.head = null;
        this.tail = null;
    }

    pushFront(item) {
        let x = new Node(item);
        if (this.count === 0) {
            this.head = x;
            this.tail = x;
        } else {
            this.head.prev = x;
            x.next = this.head;
            this.head = x;
        }
        this.count++;
    }

    pushBack(item) {
        let x = new Node(item);
        if (this.count === 0) {
            this.head = x;
            this.tail = x;
        } else {
            this.tail.next = x;
            x.prev = this.tail;
            this.tail = x;
        }
        this.count++;
    }

    empty() {
        return this.count === 0;
    }

    size() {
        return this.count;
    }

    popFront() {
        if (this.empty()) {
            throw new Error("Deque is empty");
        }
        let x = this.head;
        if (this.count === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = x.next;
            this.head.prev = null;
        }
        this.count--;
        return x.value;
    }

    popBack() {
        if (this.empty()) {
            throw new Error("Deque is empty");
        }
        let x = this.tail;
        if (this.count === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = x.prev;
            this.tail.next = null;
        }
        this.count--;
        return x.value;
    }

    front() {
        if (this.empty()) {
            throw new Error("Deque is empty");
        }
        return this.head.value;
    }

    back() {
        if (this.empty()) {
            throw new Error("Deque is empty");
        }
        return this.tail.value;
    }
}

// 명령을 처리하는 함수
function processCommands(commands) {
    const deque = new Deque();
    const results = [];
    
    commands.forEach(command => {
        const parts = command.split(' ');
        const action = parts[0];
        const value = parts[1] ? parseInt(parts[1], 10) : null;

        switch(action) {
            case 'push_front':
                deque.pushFront(value);
                break;
            case 'push_back':
                deque.pushBack(value);
                break;
            case 'pop_front':
                results.push(deque.popFront());
                break;
            case 'pop_back':
                results.push(deque.popBack());
                break;
            case 'front':
                results.push(deque.front());
                break;
            case 'back':
                results.push(deque.back());
                break;
            case 'size':
                results.push(deque.size());
                break;
            case 'empty':
                results.push(deque.empty() ? 1 : 0);
                break;
            default:
                throw new Error(`Unknown command: ${command}`);
        }
    });
    
    return results;
}

const input = fs.readFileSync(0).toString().trim().split('\n');

const numberOfCommands = Number(input[0]);
const commands = input.slice(1, numberOfCommands + 1);
const outputs = processCommands(commands);

outputs.forEach(output => console.log(output));