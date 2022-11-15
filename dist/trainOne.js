"use strict";
let prompt = require('prompt');
prompt.start();
prompt.get(['num1', 'num2', 'operation'], function (err, result) {
    if (result.operation === '+') {
        console.log(`result = ${Number(result.num1) + Number(result.num2)}`);
    }
    else if (result.operation === '-') {
        console.log(`result = ${Number(result.num1) - Number(result.num2)}`);
    }
    else if (result.operation === '*') {
        console.log(`result = ${Number(result.num1) * Number(result.num2)}`);
    }
    else if (result.operation === '/') {
        console.log(`result = ${Number(result.num1) / Number(result.num2)}`);
    }
    let user1 = {
        name: "Nawaf",
        age: 27,
        specialization: "Computer Science",
        bestFriends: ["Anwar", "Rayf", "Majed"]
    };
    console.log(user1);
});
//# sourceMappingURL=trainOne.js.map