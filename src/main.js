'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'alternate' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternate(s) {
    let uniqueLetter = [...new Set(Array.from(s))]
    let stringAr = Array.from(s)
    // let validStrings = []
    let total = 0

    for(var i = 0; i < uniqueLetter.length; i++) {
        let letter1 = uniqueLetter[i]

        for(var j = 0; j < uniqueLetter.length ; j++) {
            let letter2 = uniqueLetter[j]

            let temp = stringAr.filter(el => {
                return el === letter1 || el === letter2
            }).join('')

            if(temp.indexOf(letter1+letter1) === -1 && temp.indexOf(letter2+letter2) === -1) {
                // validStrings.push(temp)
                if(total < temp.length) {
                    total = temp.length
                }
            }
        }
    }

    return total
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const l = parseInt(readLine().trim(), 10);

    const s = readLine();

    const result = alternate(s);

    ws.write(result + '\n');

    ws.end();
}

