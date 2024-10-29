let menuItem = $.querySelector(".dropdown");
let menuHumburgerIcon = $.querySelector(".header__menu-icon-hamburger")
let dropdwonMenu = $.querySelector(".dropdown-content");
console.log(menuHumburgerIcon);
console.log(dropdwonMenu);
menuItem.addEventListener("click", ()=>{
    if(window.innerWidth <= 766){
        dropdwonMenu.classList.toggle("show")
    }
})