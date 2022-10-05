document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.getElementById('hamburger-menu') 
  const siteMenu = document.getElementById('site-menu') 
  const menuItems = document.querySelectorAll('.navbar-item a, #hamburger-menu')

  console.log(menuItems)
  

  
  if(menuItems){
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener("click", () => {
        console.log('open-menu')
        document.body.classList.toggle('no-scroll')
        siteMenu.classList.toggle("open-menu")
      })
    }
  }
})

// for (let i = 0; i < menuItems.length; i++) {
//   // some code
// }

// get all links and then when clicked apply the no-scroll turn off 