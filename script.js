function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  // Save preference
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
}

// On page load, set theme based on saved preference
window.onload = () => {
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
  }
};
