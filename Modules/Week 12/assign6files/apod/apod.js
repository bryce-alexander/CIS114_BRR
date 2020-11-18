/*
Bryce Rankin
brankin2@my.smccd.edu
CIS 114 OL
apod.js
Assignment 6
11/17/2020
*/
document.addEventListener('DOMContentLoaded', () => {

  for (const button of document.getElementsByTagName('button')) 
    button.addEventListener('click', () => {
      const action = button.textContent.toLowerCase()
      import(`./plugins/dates.mjs`)
        .then(module => {
         // check the action variable to see which button was pressed
         // this will be the button caption (Today or Random Day) in lowercase
          const actionText = action.toString()
         // call the corresponding module function to get the date string
          let dateString = ""
          if (actionText==="today") {
            dateString = module.today()
          } else {
            dateString = module.randomDate()
          }
		     // call fetch with the URL containing the API key and the date string
         let url = `https://api.nasa.gov/planetary/apod?api_key=pNn1XOTgCLoPVHZxtxpK6aLBNB2yXjxQKSz9ntCZ&date=${dateString}`
         fetch(url)
             .then((resp) => resp.json())
             .then(function(data) {
         // assign the returned data to the HTML elements (use url instead of hdurl)
                document.querySelector('h2').innerHTML = `${data.title} <br> ${data.date}`
                document.querySelector('img').src = data.url
                document.getElementById('description').innerHTML = data.explanation
              })
              .catch(err => {
                console.log(`error ${err}`)
                alert("sorry, there are no results for your search")
             })
        }) // then module
  }) // button event listener
}) // DOM event listener

