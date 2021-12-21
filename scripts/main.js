const menuHamb = document.querySelector(".menu-hamb");
const menuX = document.querySelector(".menu-x");
const menuMobileContainer = document.querySelector('.menu-mobile-container')
const menuMobileList = document.querySelector(".menu-mobile-list");
const menuMobileBg = document.querySelector(".menu-mobile-bg");
const nameLogo = document.querySelectorAll(".name-logo");
const main = document.querySelectorAll(".main");
const portfolio = document.querySelectorAll(".portfolio");
const about = document.querySelectorAll(".about");
const contact = document.querySelectorAll(".contact");

function menuMobileShow(){
  menuMobileList.classList.add(".menu-mobile-show");
}

function menuMobileHide(){
  menuMobileList.classList.remove(".menu-mobile-show");
}

menuMobileHambBtn.addEventListener("click", menuMobileShow);
menuMobileHambBtn.addEventListener("click", menuMobileHide);
