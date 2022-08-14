document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.getElementById('hamburger-menu') 
  const siteMenu = document.getElementById('site-menu') 

  
  if(hamburgerMenu){
    hamburgerMenu.addEventListener("click", () => {
      console.log('open-menu')
      siteMenu.classList.toggle("open-menu")
    })
  }
})
