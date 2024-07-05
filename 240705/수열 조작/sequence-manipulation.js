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

const fs = require('fs');
const N = Number(fs.readFileSync(0).toString().trim());

const deque = new Deque();
for (let i = 1; i <= N; i++) {
    deque.pushBack(i);
}

while (deque.size() > 1) {
    deque.popFront();  // 맨 앞의 정수를 제거
    if (deque.size() > 0) {
        deque.pushBack(deque.popFront());  // 남은 수열의 맨 앞의 정수를 맨 뒤로 이동
    }
}

console.log(deque.front());