/*
Bryce Rankin
brankin2@my.smccd.edu
CIS 114 OL
date.mjs
Lab 15
12/10/2020
*/

// create the randomDate and today functions for export
// both functions return a string in the format YYYY-MM-DD
export function today() {
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
    // Return the string
    return dateString
}

export function randomDate() {
    // Create a date representing today and a date representing June 16, 1995
    let today = new Date().getTime()
    let start = new Date(1995, 5, 16).getTime()
    // Generate a random number in between these two dates and use it to generate the new date
    let randomTime = Math.ceil(Math.random() * (today-start) + start)
    let randomDate = new Date(randomTime)
    // Format the day with a 0 before it if less than 10
    let day = () => {
        let day = randomDate.getDate()
        if (day<10) {
            day = "0" + day
        }
    return day
    }
    // Format the string of the date based on parts of the date object
    let dateString = randomDate.getFullYear() + "-" + (randomDate.getMonth()+1) + "-" + day()
    // Return the string
    return dateString
}

export function getDateString(date) {
    let day = () => {
        let day = date.getDate()
        if (day<10) {
            day = "0" + day
        }
    return day
    }
    let dateString = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + day()
    return dateString
}

