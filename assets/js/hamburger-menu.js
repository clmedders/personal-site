document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.getElementById('hamburger-menu') 
  const siteMenu = document.getElementById('site-menu') 

    hamburgerMenu.addEventListener('click', () => {
      siteMenu.classList.toggle("open-menu")
    })
  
})


