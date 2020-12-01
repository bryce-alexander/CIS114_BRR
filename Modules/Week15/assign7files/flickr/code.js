"use strict"
// Bryce Rankin
// brankin2@my.smccd.edu
// CIS 114 OL
// code.js
// Assignment 7
// 11/30/2020
$(function() {
	
	let url = "https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=3ed0d66edb093f22c5721cbe7ecda4f8&extras=url_z,date_taken" + 
"&format=json&nojsoncallback=1"
				
	// fetch the data using jQuery getJSON
	$.getJSON(url, function (data) {
		let html = ""

		// Place $.each function here	
			$.each(data.photos.photo, function(index,value) {
			// Create img element and assign the url to the src property
			// apppend it to the html string
			let imgURL = this.url_z
			let img = `<img src="${imgURL}">`;
			html += img;
			// Create an h2 element containing the title
			// append it to the html string
			// let imgTitle = this.title 
			let imgTitle = this.title;
			let title = `<h2>${imgTitle}</h2>`;
			html+=title;
			// Create a p element containing the date taken
			// append it to the html string
			let imgDate = this.datetaken;
			let date = `<p>${imgDate}</p>`;
			html+=date;
		}) // end $.each
		
		// Place the html string in the photos div element
		$('#photos').html(html);
	}).fail(function (xhr, status, error) {
		alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
	}); 
})
