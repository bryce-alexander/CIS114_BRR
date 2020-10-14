/* 
Bryce Rankin
brankin2@my.smccd.edu
CIS 114 OL
code.js
Midterm
10/13/2020 
*/

'use strict'

// Create array of answers
const answers = ['It is certain',
	'It is decidedly so',
	'Without a doubt',
	'Yes - definitely',
	'You may rely on it',
	'As I see it, yes',
	'Most likely',
	'Outlook good',
	'Signs point to yes',
	'Yes',
	'Reply hazy, try again',
	'Ask again later',
	'Better not tell you now',
	'Cannot predict now',
	'Concentrate and ask again',
	'Don\'t count on it',
	'My reply is no',
	'My sources say no',
	'Outlook not so good',
	'Very doubtful']

 function getAnswer() {
	// Generate random integer from 0 to 20 as index
	let randomIndex = Math.floor(Math.random()*20)
	// Display the random answer using random index 
	document.getElementById("output").innerHTML = answers[randomIndex]

 }
 
 document.getElementById("askBtn").addEventListener("click", getAnswer);
