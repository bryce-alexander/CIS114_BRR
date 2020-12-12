// Bryce Rankin
// brankin2@my.smccd.edu
// CIS 114 OL
// book_list.js
// Lab #15
// 12/10/2020

"use strict";

$(document).ready(function() {
    
    // Include jquery accordion
    $( "#accordion" ).accordion({
        collapsible: false,
        activate: function( event, ui ) {
            $("#image").attr("src","");
        }
    });

	// for each book link assign the corresponding book image file
    $("#web_images a, #language_images a").each( (index, img) => {
        // get old and new urls
		
		// create a variable named imageURL and assign the href attribute of the img element to it
        let imageURL= $(img).attr('href');
        // preload images		
        let bookImage = new Image();
        bookImage.src = imageURL;
        
        // set up event handlers			
        $(img).click( evt => {
		// assign the imageURL to the src attribute of the element with the id 'image'
        $("#image").attr("src",imageURL);

        // cancel the default action of each link
        evt.preventDefault();
        }); // end click 
    }); // end each
}); // end ready