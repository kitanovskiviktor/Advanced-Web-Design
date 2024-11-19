'use strict'

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.question('', (p1) => {
        p1 = p1.split(", ")

        console.log(incrementItems(p1))

        rl.close();

});

// DO NOT CHANGE ABOVE THIS LINE!!!!

function incrementItems(arrayNumbers) { // Write this function
    return arrayNumbers.map((element) => +element + 1);
}
