//const { Scrollbar } = require("swiper/modules")

/*SHOW MENU*/
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

/*MENU SHOW*/
if(navToggle){
    navToggle.addEventListener("click", () =>{
        navMenu.classList.add("show-menu")
    })
}

/*MENU HIDDEN*/
if(navClose){
    navClose.addEventListener("click", () =>{
        navMenu.classList.remove("show-menu")
    })
}

/*REMOVER MENU MOBILE*/
const navLink = document.querySelectorAll(".nav__link")

const linkAction = () =>{
    const navMenu = document.getElementById("nav-menu")
    //cuando le haga click a cada nav__link, se removerá el show-menu (osea desaparecerá)
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

/*CAMBIAR EL BACKGROUND DEL HEADER*/
const header = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('bg-header');
  } else {
    header.classList.remove('bg-header');

  }
});



