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
/////////////////////////////////////////////////////////////////////////
const successContainer = document.querySelector(".success-container");

let isValid = true;

////////////////////////////////////////////////////////////////////

// Helper Class Error
function showError(input, message) {
  isValid = false;
  const inputContainer = input.closest(".input__container");
  inputContainer.classList.add("error");
  const small = inputContainer.querySelector("small");
  small.textContent = message;
}

// Helper class Success
function showSuccess(input) {
  const inputContainer = input.closest(".input__container");
  inputContainer.classList.remove("error");
  inputContainer.classList.add("success");
}

// check for blank
function checkRequire(inputArr) {
  inputArr.forEach(input => {
    if (!input.value.length) {
      showError(input, "Can't be blank");
    } else {
      showSuccess(input);
    }
  });
}

// checking the value  of name
function checkName(input) {
  const re = /^[A-Za-z]+ [A-Za-z]+$/;

  if (!re.test(input.value.trim())) {
    showError(input, "Wrong format, letters only");
  } else {
    showSuccess(input);
    cardInfo.textContent = input.value;
  }
}

// checking if the card contain only numbers

function checkCardNumbers(input) {
  const re = /^\d+(?:\s\d+)*$/;

  if (!re.test(input.value.trim())) {
    showError(input, "Wrong format, numbers only ");
  } else if (input.value.length !== 19) {
    showError(input, "Wrong card code");
  } else {
    showSuccess(input);
    cardNumbers.textContent = input.value;
  }
}

// Checking months and years

function checkDate(input1, input2) {
  const date = new Date();
  const year = date.getFullYear();
  const month = parseInt(input2.value, 10);

  if (+input1.value < year) {
    showError(input1, `it's impossible because current year is ${year}`);
  }
  if (month < 1 || month > 12) {
    showError(input2, "Invalid Month");
  }

  cardYears.textContent = input1.value;
  cardMonths.textContent = input2.value;
}

// checking cvc
function checkCvc(input) {
  if (input.value.length < 3) {
    showError(input, "Invalid cvc");
  } else {
    showSuccess(input);
    cvcElement.textContent = input.value;
  }
}
//  Event Listeners

form.addEventListener("submit", function (e) {
  e.preventDefault();

  isValid = true;
  checkRequire([nameInput, numberInput, monthInput, yearsInput, cvcInput]);
  checkName(nameInput);
  checkCardNumbers(numberInput);
  checkDate(yearsInput, monthInput);
  checkCvc(cvcInput);

  if (isValid) {
    form.style.display = "none";

    successContainer.style.display = "block";
  }
});
