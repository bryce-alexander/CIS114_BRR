/*
Bryce Rankin
brankin2@my.smccd.edu
CIS 114 OL
code.js
Assignment 4
10/21/2020
*/

"use strict"

// use fetch to get current Euro exchange rate
// 'https://api.frankfurter.app/latest'
	 let url = 'https://api.frankfurter.app/latest'
	 fetch(url)
		 .then((response) => response.json())
		 .then(function(data) {
//
			let html = "<div class='special'>"
			html += '<h2>' + data.date + '</h2>'

			// enclose date in <h2> element and append to the html string		  
			// start unordered list
			html += "<ul>"
			
			// iterate through the rates and enclose key-value pairs
			// enclose in an <li> element with closing </li>
			// append each to the html string
			let rates = data.rates
			for (let key in rates) {
				html += `<li>${key}: ${rates[key]}</li>`
			}

			// after the loop close the list and div elements
			html += "</ul></div>"

			// display the html string on the web page
			document.getElementById("list").innerHTML = html  

		 })
		// place at end of fetch for error handling
		.catch(function(error) {
			console.log(error)
	})
  

