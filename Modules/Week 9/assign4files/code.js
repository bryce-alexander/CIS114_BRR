/*
Bryce Rankin
brankin2@my.smccd.edu
CIS 114 OL
code.js
Assignment 4
10/21/2020
*/

'use strict'

const numberFormat = (number, lang) => {
 
    // use Intl.NumberFormat
    let formattedNumber = new Intl.NumberFormat(lang).format(number)
    // return the formatted number
    return formattedNumber
}
  
 const dateFormat = (date, lang) => {
     let newDate = new Date(date)
    // use Intl.DateTimeFormat
	let formattedDate = new Intl.DateTimeFormat(lang, { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' }).format(newDate)
	// use options for day and year (both numeric), weekday and month (both long)
    
    // return the formatted date
    return formattedDate
}

const currencyFormat = (currency, lang, index) => {
    // currency codes
	let currencies = ['USD', 'USD', 'GBP', 'EUR', 'JPY', 'CNY', 'RUB', 'EGP', 'EUR', 'THB', 'VND']
    
    // use Intl.NumberFormat
    let newNumber = new Intl.NumberFormat(lang, {
        style: 'currency',
        currency: currencies[index]}).format(currency)
    // use options for style (currency) and currency (currencies array element - access using index)

    // return the formatted currency
    return newNumber
}

function getData() {
    let data = [
        {"date": "4/1/2020", "views": 938213, "sales": 3890.21},
        {"date": "4/2/2020", "views": 282691, "sales": 9890.10},
        {"date": "5/1/2020", "views": 176593, "sales": 2687.43},
        {"date": "5/2/2020", "views": 238224, "sales": 1630.00},
        {"date": "6/1/2020", "views": 1006, "sales": 714.20},
        {"date": "6/2/2020", "views": 17967, "sales": 6285.00},
        {"date": "7/1/2020", "views": 67328, "sales": 4786.59},
        {"date": "7/2/2020", "views": 17967, "sales": 7298.00}
    ]

    // index of the selection in the drop-down list
    let index = document.getElementById("langDropdown").selectedIndex
    // value (language) of the selection in the drop-down list
    let language = document.getElementById("langDropdown").value
    /// use default language if no language
    if(language === "") {
        language = navigator.language
    }
    
    // use a loop to create string for output
    // call the format functions to get formatted data
    // wrap the data in span elements - for example:
    // <span class='dt'>FORMATTED DATE GOES HERE</span>
    // <span class='nm'>FORMATTED VIEWS GOES HERE</span>
    // <span class='nm'>FORMATTED SALES GOES HERE</span>
    let dataString = ''
    for (let entry of data) {
        dataString += `<span class='dt'>`+ dateFormat(entry.date, language) + `</span>
        <span class='nm'>`+ numberFormat(entry.views,language) + `</span>
        <span class='nm'>` + currencyFormat(entry.sales,language,index) +`</span>`;
    }

    // assign output string after the loop
    document.getElementById("data").innerHTML = dataString
 }

 window.onload = (event) => {
        // assign event handler (getData function) to drop-down list
        document.getElementById("langDropdown").addEventListener("change", getData)
        getData()
}

