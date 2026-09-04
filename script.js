// Grab all the elements we need to control
const homeownerBtn = document.getElementById("homeowner-btn");
const contractorBtn = document.getElementById("contractor-btn");
const responseMessage = document.getElementById("response-message");
const signupForm = document.getElementById("signup-form");
const tradeField = document.getElementById("trade-field");

// Keep track of which type of user is signing up
let userType = null;

// When "I'm a Homeowner" is tapped:
homeownerBtn.addEventListener("click", function () {
  userType = "homeowner";
  signupForm.classList.remove("hidden");   // show the form
  tradeField.classList.add("hidden");      // hide the trade field (homeowners don't need it)
  responseMessage.textContent = "";
});

// When "I'm a Contractor" is tapped:
contractorBtn.addEventListener("click", function () {
  userType = "contractor";
  signupForm.classList.remove("hidden");   // show the form
  tradeField.classList.remove("hidden");   // show the trade field (contractors need it)
  responseMessage.textContent = "";
});

// When the form is submitted:
signupForm.addEventListener("submit", function (event) {
  event.preventDefault(); // stops the page from refreshing (the browser's default form behavior)

  // Grab what the user typed
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const trade = document.getElementById("trade").value;

  // For now, we just log it and show a confirmation message.
  // Later, this is where we'll send the data to a real database instead.
  console.log("New signup:", { userType, name, email, trade });

  responseMessage.textContent = "Thanks, " + name + "! We'll be in touch soon.";
  responseMessage.style.color = "#1a3c5e";

  signupForm.reset();
  signupForm.classList.add("hidden");
});
