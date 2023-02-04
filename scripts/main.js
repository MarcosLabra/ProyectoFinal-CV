const mobileMenu = document.getElementById("mobileMenu")
const mobileMenuButton = document.getElementById("mobileMenuButton")

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('show')
});

mobileMenu.addEventListener('click', () => {
  if (mobileMenu.classList.contains('show')) {
    mobileMenu.classList.toggle('show')
  }
})

