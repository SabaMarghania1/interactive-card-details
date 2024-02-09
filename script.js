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
// Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();
});
