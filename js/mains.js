
var hamburger;
var navMenu;
var navLink;

function handleOnLoad() {
    hamburger = document.getElementsByClassName("hamburger")[0];
    navMenu = document.getElementsByClassName("nav-menu")[0];
    navLink = document.getElementsByClassName("nav-link");
    
    hamburger.addEventListener("click", mobileMenu);
    console.log(navLink);

    for(var index = 0; index < navLink.length; index++) {
        navLink[index].addEventListener("click", closeMenu);
    }
    //navLink.forEach(n => n.addEventListener("click", closeMenu));
}

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}