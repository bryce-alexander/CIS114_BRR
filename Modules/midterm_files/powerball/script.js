'use strict'

function playGame() {

    
    // Generate the 5 random numbers 1-69 inclusive for the PowerBall game

	
	// Create an array from the Set with the 5 random numbers and sort it
 
 
	// Create the PowerBall number 1-26 inclusive and place it in the array

	
	// Display each random number using document.getElementById and the innerHTML property
	
	
    // User's guess - create an array with the numbers in the guess
    var userNum1 = parseInt(document.getElementById("guess1").value)
    var userNum2 = parseInt(document.getElementById("guess2").value)
    var userNum3 = parseInt(document.getElementById("guess3").value)
    var userNum4 = parseInt(document.getElementById("guess4").value)
    var userNum5 = parseInt(document.getElementById("guess5").value)
    var userNum6 = parseInt(document.getElementById("guess6").value)
    
	
	// Count each match to the random numbers and determine game outcome

	
	// Display game outcome: win, lose, or number of matches
	document.getElementById("winner").innerHTML = 

}

document.getElementById("playBtn").addEventListener("click", playGame);