"use strict"

	// Employee class
	class Employee {
        //Create constructor for Employee which assigns name and position
        constructor(firstName, lastName, position) {
            this.firstName = firstName
            this.lastName = lastName
            this.position = position
        }
        // Create method for concatenating the first and last names of the employee
        fullName() {
            return this.firstName + " " + this.lastName
        }
    }
    // array of Employee objects
    let pam = new Employee('Pamela','Beesly','Receptionist')
    let andy = new Employee('Andy','Bernard','Sales Director')
    let creed = new Employee('Creed','Bratton','Quality Assurance')
    let jim = new Employee('Jim','Halpert','Assistant Regional Manager')
    let ryan = new Employee('Ryan','Howard','Vice President, North East')
    let stanley = new Employee('Stanley','Hudson','Sales Representative')
    let kelly = new Employee('Kelly','Kapoor','Customer Service Rep.')
    let phyllis = new Employee('Phyllis','Lapin','Sales Representative')
    let kevin = new Employee('Kevin','Malone','Accountant')
    let angela = new Employee('Angela','Martin','Senior Accountant')
    let oscar = new Employee('Oscar','Martinez','Accountant')
    let meredith = new Employee('Meredith','Palmer','Supplier Relations')
    let dwight = new Employee('Dwight','Schrute','Assistant Regional Manager')
    let michael = new Employee('Michael','Scott','Regional Manager')
    let toby = new Employee('Toby','Flenderson','Human Resources Manager')

    let employeeList = [pam, andy, creed, ryan, stanley, kelly, phyllis, kevin, angela, oscar, meredith, dwight, michael, toby]

    let html = "";
	
	// for of loop
    for (const emp of employeeList) {
        let lowerCaseName = emp.fullName().toLowerCase()
        let imagePath = "./images/" + lowerCaseName.replace(' ', '_') + ".jpg"
        html += "<div class='special'>"
        html += "<span><img src='" + imagePath + "'</img></span>"	
        //html += "<span><img src='" + "./images/" + lowerCaseName.replace(' ', '_') + ".jpg" + "'</img></span>"
        html += "<h2>" + emp.fullName() + "</h2>"	
        html += "<p>" + emp.position + "</p>"
        html += "</div>"
    }
    // end of loop

    // display the html string on the web page
    document.getElementById('list').innerHTML = html;