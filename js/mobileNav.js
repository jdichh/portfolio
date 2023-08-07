const navLinks = document.querySelector(".navLinks");
const toggleButton = document.querySelector(".toggleButton");
const links = document.querySelectorAll(".navLinks a"); // select all links inside navLinks
const dimmedBackground = document.querySelector(".dimmedBackground"); // select the dimmed background

function toggleNavbar(visibility) {
  navLinks.setAttribute("data-visible", visibility);
  toggleButton.setAttribute("aria-expanded", visibility);
  dimmedBackground.style.display = visibility === "true" ? "block" : "none"; // show or hide the dimmed background
}

toggleButton.addEventListener("click", () => {
  const visibility =
    navLinks.getAttribute("data-visible") === "false" ? "true" : "false";
  toggleNavbar(visibility);
});

// add event listener to each link
links.forEach((link) => {
  link.addEventListener("click", () => {
    toggleNavbar("false");
  });
});
