let currentStep = 0;
// tracking the step number of the form input process
let userData = {};
// used to store the responses

// function declaration: handles the logic of reading user input, storing it and updating the interface
function processInput() {
  const userInput = document.getElementById("userInput");
  // retrieves the HTML element for userInput
  const labelQuestion = document.getElementById("labelQuestion");
  // retrieves the HTML element for labelQuestion
  const output = document.getElementById("output");
  // retrieves the HTML element for output

  if (currentStep === 0) {
    // if currentStep is 0, function stores the user's name, ask the next question, age
    userData.name = userInput.value;
    labelQuestion.textContent = "How old are you?";
    userInput.value = "";
    userInput.placeholder = "Enter your age";
  } else if (currentStep === 1) {
    // if currentStep is 1, function stores the user's age then ask about location
    userData.age = userInput.value;
    labelQuestion.textContent = "Where do you live?";
    userInput.value = "";
    userInput.placeholder = "Type your location";
  } else if (currentStep === 2) {
    // if currentStep is 2, the function will store the user's location, function then returns (which ends the function)
    userData.location = userInput.value;
    userInput.style.display = "none";
    document.querySelector("button").style.display = "none";
    output.textContent = `Hi ${userData.name}, I see that you're ${userData.age} years old and live in ${userData.location}.`;
    return;
  }
  currentStep++;
  // increases the current step by 1
}

document
  .getElementById("userInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      processInput();
    }
  });
// attaches an event listerner to the user input field that triggers the processInput function when the Enter key is pressed.

// next steps

// add button to clear the input to start over again
