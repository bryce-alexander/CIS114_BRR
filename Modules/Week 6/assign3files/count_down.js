/*
Bryce Rankin
brankin2@my.smccd.edu
CIS 114 OL
lab6.txt
Lab #6
9/28/2020
*/

'use strict'

// Calculate the number of days until final exam using the Date class.
// Your program must work for the current date, not a fixed date.
// The final exam is Friday, December 18.
// Date variable for current date
let today = new Date()
// Date variable for day of final
let final = new Date(2020, 11, 18)
let timeUntilFinal = parseInt((final - today)/(60*60*24*1000))
let str
if (today.toDateString()===final.toDateString()) { 
    str = 'The final is today. Good luck!' 
} else if (today>final) { 
    str = `Oh no!  The final was ${-timeUntilFinal} days ago!`
} else { 
    str = `${timeUntilFinal} day(s) until the final exam (${final.toDateString()})`
}
// Display the number of days using template literals for the string.
document.getElementById("message").innerHTML = str


// Choose a quote from https://www.brainyquote.com/quote_of_the_day
// Store the quote in a variable and the author in a separate variable
let quote = "Success seems to be largely a matter of hanging on after others have let go."
let author = "William Feather"

// Create a regular expression and use it to count the number of words in the quote.
let howManyWords = 0
for (const I of quote.matchAll(/[a-z]+/gi)) { howManyWords+=1 } 

// Create another regular expression and use it to count a letter (A-Z) in the quote.
// Choose a letter and make sure that it does a case-insensitive search: a and A must be counted as the same letter.
let howManyChars = 0
for (const I of quote.matchAll(/[a]/gi)) { howManyChars+=1 } 

// Create and display a string containing the quote, the author, the word count and the letter count, clearly labeled.
// Use template literals to create the string.
let html = `
${quote} <br>
--${author}
<br><br>
The number of words in the quote is ${howManyWords}<br>
The number of times the letter A appears in the quote is ${howManyChars}`;
 document.getElementById('quote').innerHTML = html
 
 