/*
Bryce Rankin
brankin2@my.smccd.edu
CIS 114 OL
script.js
Midterm
10/13/2020 
*/

'use strict'

function playGame() {

    
    // Generate the 5 random numbers 1-69 inclusive for the PowerBall game

    // Create function to generate 5 numbers between 1 and 69 (inclusive)
    // Add these numbers to a set if they do not already exist (this condition
    // was included in order to prevent the loop from stopping short)
    let randomFive = () => {
        let numberSet = new Set()
        let i = 0
        while (i<5) {
            let randomNumber = Math.ceil(Math.random()*69)
            if (!numberSet.has(randomNumber)) {
                numberSet.add(randomNumber)
                i++
            }
        }
        return numberSet
    }	
    // Create an array from the Set with the 5 random numbers and sort it
    let winningNumbers = Array.from(randomFive()).sort() 
    // Create the PowerBall number 1-26 inclusive and place it in the array
    winningNumbers.push(Math.ceil(Math.random()*26))
	// Display each random number using document.getElementById and the innerHTML property
	for (let i = 0; i < 6; i++) {
        document.getElementById("test" + (i+1)).innerHTML = winningNumbers[i]
    }
    // User's guess - create an array with the numbers in the guess
    var userNum1 = parseInt(document.getElementById("guess1").value)
    var userNum2 = parseInt(document.getElementById("guess2").value)
    var userNum3 = parseInt(document.getElementById("guess3").value)
    var userNum4 = parseInt(document.getElementById("guess4").value)
    var userNum5 = parseInt(document.getElementById("guess5").value)
    var userNum6 = parseInt(document.getElementById("guess6").value)

    let guessNumbers = [userNum1, userNum2, userNum3, userNum4, userNum5, userNum6]
    // Count each match to the random numbers and determine game outcome

    // Loop through and count each match that isn't the PowerBall
    let numberOfMatches = 0;
    for (let i = 0; i<5; i++) {
        for (let j = 0; j<5; j++) {
            if (winningNumbers[i] === guessNumbers[j]) {
                numberOfMatches++;
            }
        }
    }

    // Create boolean which says if PowerBall is matched or not
    let gotPowerBall = winningNumbers[5]===guessNumbers[5]

    // Create array of word/number equivalents
    let numberCorrect = ['one','two','three','four','five']

    // Conditions to determine outcome
    let gameOutcome = ""
    // If any numbers match plus the PowerBall:
    if (numberOfMatches>=1 && gotPowerBall) {
        gameOutcome = "You got " + numberCorrect[numberOfMatches-1] + " plus the PowerBall!!"
    // If only match is the PowerBall:
    } else if (numberOfMatches===0 && gotPowerBall) {
        gameOutcome = "You got the PowerBall!!"
    // If any numbers match but not the PowerBall
    } else if (numberOfMatches>=1 && !gotPowerBall) {
        gameOutcome = "You got " + numberCorrect[numberOfMatches-1] + "!!"
    // If all numbers match including the PowerBall
    } else if (numberOfMatches===5 && gotPowerBall) {
        gameOutcome = "YOU WIN!!"
    }
    // If no numbers match
    else {
        gameOutcome = "You lose!!"
    }
	// Display game outcome: win, lose, or number of matches
	document.getElementById("winner").innerHTML = gameOutcome

}

document.getElementById("playBtn").addEventListener("click", playGame);