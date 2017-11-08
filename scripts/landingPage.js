// Garrett Ward, This is a function to make our basic landing page
// that prompts the user to create a profile
let addUserForm = require("./userFormController")

let buildLandingPage = function () {
    let landingPageMarker = document.getElementById("landingPage")
    landingPageMarker.innerHTML += `
    <div>
    <h1>
    Welcome to Get a life!
    </h1>
    <button id="showUserForm> Sign Up!</button>
    </div>
    `
    document.getElementById("showUserForm").addEventListener("click", addUserForm)
}


module.exports = buildLandingPage 