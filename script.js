// Element were we attach input values
const cvcElement = document.querySelector(".cvc");
const cardNumbers = document.querySelector(".card__numbers");
const cardInfo = document.querySelector(".card__owner");
const cardDate = document.querySelector(".date");
const cardMonths = document.getElementById("month");
const cardYears = document.getElementById("year");

/////////////////////////////////////////////////////////

// Inputs
const nameInput = document.getElementById("name-input");
const numberInput = document.getElementById("number-input");
const monthInput = document.getElementById("mm");
const yearsInput = document.getElementById("yy");
const cvcInput = document.getElementById("cvc");

const form = document.getElementById("form");
////////////////////////////////////////////////////////////////////

// Helper Class Error
function showError(input, message) {
  const inputContainer = input.closest(".input__container");
  inputContainer.classList.add("error");
  const small = inputContainer.querySelector("small");
  small.textContent = message;
}

// Helper class Success
function showSuccess(input) {
  const inputContainer = input.closest(".input__container");
  inputContainer.classList.add("success");
}

function checkRequire(inputArr) {
  inputArr.forEach(input => {
    if (!input.value.length) {
      showError(input, "Can't be blank");
    } else {
      showSuccess(input);
    }
  });
}

//  Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequire([nameInput, numberInput, monthInput, yearsInput, cvcInput]);
});
