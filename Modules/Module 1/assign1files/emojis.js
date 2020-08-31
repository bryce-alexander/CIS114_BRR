'use strict'
 
let objectArray = [
    {"Name": "Name1", "Age": 1, "Emoji": 🥇},
    {"Name": "Name2", "Age": 2, "Emoji": 🥈},
    {"Name": "Name3", "Age": 3, "Emoji": 🥉},
    {"Name": "Name4", "Age": 4, "Emoji": 👍},
    {"Name": "Name5", "Age": 5, "Emoji": 👎},
];

let outputString = ' ';
for (const i in objectArray){
    //console.log(`${i}: ${objectArray[i]}`);
    //console.log(`Name: ${objectArray[i]}, Age: ${}`);
    console.log(`${JSON.stringify(objectArray[i])}`);
    outputString += `${JSON.stringify(objectArray[i])}` + '<br>';
}
console.log(outputString);
let test = "hello"
document.getElementById('output').innerHTML = test;