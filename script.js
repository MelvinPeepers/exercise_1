let currentStep = 0;
let userData = {};

function processInput() {
  const userInput = document.getElementById("userInput");
  const labelQuestion = document.getElementById("labelQuestion");
  const output = document.getElementById("output");

  if (currentStep === 0) {
    userData.name = userInput.value;
    labelQuestion.textContent = "How old are you?";
    userInput.value = "";
    userInput.placeholder = "Enter your age";
  } else if (currentStep === 1) {
    userData.age = userInput.value;
    labelQuestion.textContent = "Where do you live?";
    userInput.value = "";
    userInput.placeholder = "Type your location";
  } else if (currentStep === 2) {
    userData.location = userInput.value;
    userInput.style.display = "none";
    document.querySelector("button").style.display = "none";
    output.textContent = `Hi ${userData.name}, I see that you're ${userData.age} years old and live in ${userData.location}.`;
    return;
  }
  currentStep++;
}

document
  .getElementById("userInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      processInput();
    }
  });
