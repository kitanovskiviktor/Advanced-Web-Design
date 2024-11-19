'use strict'

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.question('', (p1) => {
    rl.question('', (p2) => {
        p1 = p1.split(", ")
        p2 = p2.split(", ")

        console.log(hasSameBread(p1,p2))

        rl.close();
    })
});

// DO NOT CHANGE ABOVE THIS LINE!!!!

function hasSameBread(arrayString, arrayString2) { // Write this function
    return (arrayString[0] === arrayString2[0]) && (arrayString[arrayString.length - 1] === arrayString2[arrayString.length - 1])

}

