"use strict"
// Bryce Rankin
// brankin2@my.smccd.edu
// CIS 114 OL
// reservation.js
// Assignment 7
// 11/30/2020
$(document).ready( () => {
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/
		
	// move the focus to the first text box
	$("#arrival_date").focus()
	
	// the handler for the submit event of the form
	// executed when the submit button is clicked
	$("#reservation_form").submit( evt => {
		
		let isValid = true
		
		// Validate the arrival date, number of nights, name, email and phone number
		
		// A value must be entered into each text box. 
		// Display "This field is required." in the span element if a value is missing.
		// Use $(selector).next().text to display the error messages in the span element.
		// NOTE that you must substitute the actual id of the input HTML element
		const dateFormat = /\b[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}\b/
		if ($("#arrival_date").val()==="") {
			$("#arrival_date").next().text("This field is required.");
			isValid=false;
		} else if (!$("#arrival_date").val().match(dateFormat)){
			$("#arrival_date").next().text("Invalid date format.");
			isValid=false;
		} else {
			$("#arrival_date").next().text("");
		}
		// The number of nights must be numeric.
		// Display "Must be numeric." in the span element if the nights is not numeric.
		const numeric = /\b^[0-9]+$\b/
		if ($("#nights").val()==="") {
			$("#nights").next().text("This field is required.");
			isValid=false;
		} else if (!$("#nights").val().match(numeric)){
			$("#nights").next().text("Must be numeric.");
			isValid=false;
		} else {
			$("#nights").next().text("");
		}
		// The email address must match the pattern provided.
		// Display "Must be a valid email address." in the span element if the email is incorrect.
		if ($("#email").val()==="") {
			$("#email").next().text("This field is required.");
			isValid=false;
		} else if (!$("#email").val().match(emailPattern)){
			$("#email").next().text("Must be a valid email address");
			isValid=false;
		} else {
			$("#email").next().text("");
		}
		// Create a regular expression for the phone number in the format XXX-XXX-XXXX where X is a digit.  
		// Display "Must be a valid phone number." in the span element if the phone number is incorrect.
		const phoneFormat = /\b[0-9]{3}\-[0-9]{3}\-[0-9]{4}\b/
		if ($("#phone").val()==="") {
			$("#phone").next().text("This field is required.");
			isValid=false;
		} else if (!$("#phone").val().match(phoneFormat)){
			$("#phone").next().text("Must be a valid phone number.");
			isValid=false;
		} else {
			$("#phone").next().text("");
		}
		// Be sure to set the span element to the empty string if the input is valid.
		const nameFormat = /[A-Za-z]+[\ ]*$/
		if ($("#name").val()==="") {
			$("#name").next().text("This field is required.");
			isValid=false;
		} else if (!$("#name").val().match(nameFormat)){
			$("#name").next().text("Must be a valid name.");
			isValid=false;
		} else {
			$("#name").next().text("");
		}
		
		// if there is invalid input do not submit the form
		if (!isValid) {
            evt.preventDefault()                
        }
		
	})	// end submit
}) // end ready