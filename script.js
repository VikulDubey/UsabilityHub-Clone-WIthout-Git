let hamburger_button = document.getElementById("hamburger");
let nav_links = document.getElementById("menubar");
// Toggle the menu on click of burger button and close it when clicked again
hamburger_button.onclick = () => {
  nav_links.classList.toggle("hamburger-class");
};
