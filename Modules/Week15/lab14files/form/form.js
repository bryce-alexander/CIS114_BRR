'use strict'
// Bryce Rankin
// brankin2@my.smccd.edu
// CIS 114 OL
// form.js
// Lab #14
// 11/30/2020

$(function () {

    // process the form
    $('#myForm').submit(function (event) {

        // assume that the form input is valid
        let isValid = true

        const email = $("#email").val().trim()
 
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/
		// check if the email is empty and if it is, display the message:
		// "This field is required." in the text property of the span element
		// using $("#email").next().text
		if ($('#email').val()==="") {
			$('#email').next().text("This field is required.");
			isValid = false;
		}
           
		// validate the email entry with a regular expression
		// if the email address is invalid, display the message "Must be a valid email address."
		// in the text property of the span element
		else if (!$('#email').val().match(emailPattern)) {
			$('#email').next().text("Must be a valid email address.");
			isValid = false;
		}
		// set isValid to false if the email is empty or invalid

		// if the email is valid, set the text property of the span element to the empty string
		else {
			$('#email').next().text("");
		}
        const name = $("#name").val().trim()
		// check if the name is empty, and if it is, display the message
		// "This field is required." in the text property of the span element
		// using $("#name").next().text
		if ($("#name").val()==="") {
			$("#name").next().text("This field is required.");
			isValid = false;
		}
		// set isValid to false if the name is empty
		else {
			$("#name").next().text("");
		}
		// if the name is valid, set the text property of the span element to the empty string

        const superhero = $("#superheroAlias").val().trim()
		
   		// check if the superhero input is empty, and if it is, display the message
		// "This field is required." in the text property of the span element
		// using $("#superheroAlias").next().text
		if ($("#superheroAlias").val()==="") {
			$("#superheroAlias").next().text("This field is required.");
			isValid = false;
		}
		// set isValid to false if the name is empty
		else {
			$("#superheroAlias").next().text("");
		}
		// if the name is valid, set the text property of the span element to the empty string

		// if there is invalid input do not submit the form
        if (!isValid) {
            event.preventDefault()                
        }
    })
})

