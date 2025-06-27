let currentValue = 0;

const counterDisplay = document.getElementById("counter-display");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const langSelect = document.getElementById("language-select");
const description = document.getElementById("counter-description");
const translations = {
  en: "This is the challenge aimed at reviewing the basics of Javascript in order to make a website interactive. In our case, a counter.",
  vi: "Đây là thử thách nhằm ôn lại những kiến thức cơ bản về Javascript để làm cho một trang web có tính tương tác. Trong trường hợp này là một bộ đếm.",
};

function updateDisplay() {
  counterDisplay.innerText = currentValue;
}

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

langSelect.addEventListener("change", () => {
  const selectedLang = langSelect.value;
  description.innerText = translations[selectedLang] || translations.en;
});

updateDisplay();
