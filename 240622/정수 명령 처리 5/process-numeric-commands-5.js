const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let N = parseInt(input[0]);
let commands = input.slice(1);

let dynamicArray = [];

for (let i = 0; i < N; i++) {
    let command = commands[i].split(" ");
    
    if (command[0] === "push_back") {
        let value = parseInt(command[1]);
        dynamicArray.push(value);
    } else if (command[0] === "pop_back") {
        dynamicArray.pop();
    } else if (command[0] === "size") {
        console.log(dynamicArray.length);
    } else if (command[0] === "get") {
        let index = parseInt(command[1]) - 1;
        console.log(dynamicArray[index]);
    }
}