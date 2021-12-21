const menuHamb = document.querySelector(".menu-hamb");
const menuX = document.querySelector(".menu-x");
const menuMobileList = document.querySelector(".menu-mobile-list");
const menuMobileBg = document.querySelector(".menu-mobile-bg");
const everythingButMenuMobile = document.querySelectorAll(".main");

function menuMobileShow(){
  menuMobileList.classList.add(".menu-mobile-show");
}

function menuMobileHide(){
  menuMobileList.classList.remove(".menu-mobile-show");
}

menuMobileHambBtn.addEventListener("click", menuMobileShow);
menuMobileHambBtn.addEventListener("click", menuMobileHide);
