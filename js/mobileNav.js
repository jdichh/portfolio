const navLinks = document.querySelector('.navLinks')
const toggleButton = document.querySelector('.toggleButton')
window.addEventListener(`popstate`, handle);

toggleButton.addEventListener('click', () => {
    const visibility = navLinks.getAttribute('data-visible');
    if (visibility === "false") {
        navLinks.setAttribute('data-visible', true)
        toggleButton.setAttribute('aria-expanded', true)
    }
    else if (visibility === "true"){
        navLinks.setAttribute('data-visible', false)
        toggleButton.setAttribute('aria-expanded', false)
    }
});

function handle() {
  if (location.hash) {
    history.replaceState(null, ``, location.pathname);
  }
}