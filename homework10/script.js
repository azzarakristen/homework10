const modeToggle = document.querySelector("#modeToggle");
let isDarkMode = false;

modeToggle.addEventListener("click", (event) => {
  event.preventDefault();
  isDarkMode = !isDarkMode;
  document.body.classList.toggle("dark-mode", isDarkMode);
});
