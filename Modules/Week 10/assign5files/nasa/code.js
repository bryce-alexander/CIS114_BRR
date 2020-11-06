/*
Bryce Rankin
brankin2@my.smccd.edu
CIS 114 OL
code.js
Assignment 4
10/21/2020
*/

'use strict'

// use fetch to get the Astronomy Photo of the Day
// URL is https://api.nasa.gov/planetary/apod?api_key=YOUR_API_KEY

// This sequence was added to avoid the API inaccurately defaulting to a future date
// Create a new date representing today
let today = new Date()
// Format the day with a 0 before it if less than 10
let day = () => {
    let day = today.getDate()
    if (day<10) {
        day = "0" + day
    }
    return day
}
// Format the string of the date based on parts of the date object
let dateString = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + day()
// Create url variable with a template literal including the string
let url = `https://api.nasa.gov/planetary/apod?api_key=pNn1XOTgCLoPVHZxtxpK6aLBNB2yXjxQKSz9ntCZ&date=${dateString}`
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
	// use querySelector for an HTML element without an id

	// assign the title and date to the h2 element
        document.querySelector('h2').innerHTML = `${data.title} <br> ${data.date}`

    	// assign the hdurl to the img src
        document.querySelector('img').src = data.hdurl
   
	// assign the explanation to the description	
        document.getElementById('description').innerHTML = data.explanation
    })
    // place this at the end of the fetch
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    })
