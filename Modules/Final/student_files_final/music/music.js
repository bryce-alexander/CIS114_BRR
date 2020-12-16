'use strict'

$(function() {

   // perform artist search when the button is clicked
   $('#searchButton').click(function(e) {
      e.preventDefault()

	  // create URL here with the artist name input by the user

	  // call the getJSON method to retrieve the data, using the URL
	
		// use the html variable for the output
		let html = ""

		// use $.each method to build up output for each album
	
			html += `<div id="album">`	

			// APPEND ALL OF THESE TO THE html VARIABLE
			// create img element with id art using image file for src

			// create p element for the artist name

			// create p element for album name

			// create p element for price and currency

			// create p element for the genre

			// close the div element

		// display all albums in the photos div (AFTER the each method)

	}) // click
}) // ready