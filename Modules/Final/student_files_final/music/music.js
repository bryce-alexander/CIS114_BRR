'use strict'
// Bryce Rankin
// brankin2@my.smccd.edu
// CIS 114
// memory.js
// Final Exam
// 12/12/2020

$(function() {

   // perform artist search when the button is clicked
   $('#searchButton').click(function(e) {
      e.preventDefault()

	  // create URL here with the artist name input by the user
	  const name = $("#userInput").val()
	  const formattedName = encodeURIComponent(name)
	  const url = `https://itunes.apple.com/search?term=${formattedName}&country=US&media=music&entity=album&limit=20`

	  // call the getJSON method to retrieve the data, using the URL
	  $.getJSON(url, function (data) {
		// use the html variable for the output
		let html = ""
		console.log(data)

		// use $.each method to build up output for each album
		$.each(data.results, function(index,value) {
			html += `<div id="album">`	
			console.log(this.collectionName)
			// APPEND ALL OF THESE TO THE html VARIABLE
			// create img element with id art using image file for src
			html += `<img id="art" src="${this.artworkUrl100}">`
			// create p element for the artist name
			html += `<p style='font-weight:bold'>${this.artistName}</p>`
			// create p element for album name
			html += `<p>${this.collectionName}</p>`
			// create p element for price and currency
			html += `<p>$${this.collectionPrice} ${this.currency}</p>`
			// create p element for the genre
			html += `<p>${this.primaryGenreName}</p>`
			// close the div element
			html += `</div><br><br>`
		})
		// display all albums in the photos div (AFTER the each method)
		$('#photos').html(html)
	  })
	}) // click
}) // ready