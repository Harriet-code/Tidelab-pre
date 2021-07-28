// DECLARING AND GETTING THE CONST ID WE WANT TO PUT FUNCTIONS TO. FIRST YOU GIVE THE DIV CLASS AN ID OR A CLASS YOU WANT TO TARGET
// const navItemContainer = document.getElementById("nav-item-wrapper");

// FUNCTION THAT OPENS AND CLOSES THE NAV-BAR
// function toggleNavbar() {
//   navItemContainer.classList.toggle("open-nav-item");
// }

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
