// Step 1: Grab the elements from the page so JavaScript can control them
const homeownerBtn = document.getElementById("homeowner-btn");
const contractorBtn = document.getElementById("contractor-btn");
const responseMessage = document.getElementById("response-message");

// Step 2: Tell the homeowner button what to do when clicked
homeownerBtn.addEventListener("click", function () {
  responseMessage.textContent = "Great! Let's get your project posted. (Sign-up form coming soon)";
  responseMessage.style.color = "#1a3c5e";
});

// Step 3: Tell the contractor button what to do when clicked
contractorBtn.addEventListener("click", function () {
  responseMessage.textContent = "Welcome! Let's get your contractor profile started. (Sign-up form coming soon)";
  responseMessage.style.color = "#e07b39";
});
