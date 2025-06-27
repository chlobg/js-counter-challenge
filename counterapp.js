// Initialisation
let currentValue = 0;

// Récupération des éléments
const counterDisplay = document.getElementById("counter-display");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

// Fonctions
function updateDisplay() {
  counterDisplay.innerText = currentValue;
}

// Événements
incrementBtn.addEventListener("click", () => {
  currentValue++;
  updateDisplay();
});

decrementBtn.addEventListener("click", () => {
  currentValue--;
  updateDisplay();
});

resetBtn.addEventListener("click", () => {
  currentValue = 0;
  updateDisplay();
});

// Initial render
updateDisplay();
