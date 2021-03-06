//authors: Jason and Kristen
//purpose: insert user registration form into DOM

const createUser = require("./userObjectFactory")
const userFormEl = document.getElementById("userFormSection")

const addUserForm = function() {
    
    document.getElementById("showUserForm").classList.add("hideIt") //hides sign-up button
    document.getElementById("showUserSignIn").classList.add("hideIt") 

    const formDiv = document.createElement("div") //creates a div to hold the form
    formDiv.id = "user_form"

    //creates content for the form
    let userFormString = `
            <label for="user_firstName">First Name</label>    
                <input type="text" id="user_firstName" name="user_firstName" required="required" class="form-control">
            <label for="user_lastName">Last Name</label>    
                <input type="text" id="user_lastName" name="user_lastName" required="required" class="form-control">
            <label for="user_userName">Username</label>    
                <input type="text" id="user_userName" name="user_userName" required="required" class="form-control">
            <label for="user_email">Email Address</label>    
                <input type="email" id="user_email" name="user_email" required="required" class="form-control">
            <label for="user_password">Password</label>    
                <input type="password" id="user_password" name="user_password" required="required" class="form-control">
    
    ` 
    formDiv.innerHTML = userFormString //adds the form content to the div
    
    // creates register button for the form
    const formSubmitButton = document.createElement("input")
    formSubmitButton.classList.add("btn", "btn-primary")
    formSubmitButton.type = "submit"
    formSubmitButton.value = "Register"
    formSubmitButton.id = "user_submitForm"
    formSubmitButton.addEventListener("click", createUser)

    formDiv.appendChild(formSubmitButton) //appends register button to the div

    userFormEl.appendChild(formDiv) //appends the div to the form element
    

}

module.exports = addUserForm