// Bryce Rankin
// brankin2@my.smccd.edu
// CIS 114 OL
// emojis.js
// Assignment #1
// Date: 8/30/2020

'use strict'
 
let objectArray = [
    {"Name": "John", "Age": 1, "Emoji": "🥇"},
    {"Name": "George", "Age": 2, "Emoji": "🥈"},
    {"Name": "Tommy", "Age": 3, "Emoji": "🥉"},
    {"Name": "Tammy", "Age": 4, "Emoji": "👍"},
    {"Name": "Edgar", "Age": 5, "Emoji": "👎"},
];



let outputString = ' ';
for (const i in objectArray){

    console.log(`Name: ${objectArray[i].Name} ${objectArray[i].Emoji} Age: ${objectArray[i].Age} <br>`);
    outputString += `Name: ${objectArray[i].Name} ${objectArray[i].Emoji} Age: ${objectArray[i].Age} <br>`;
}
document.getElementById('output').innerHTML = outputString;