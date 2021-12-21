const menuHamb = document.querySelector(".menu-hamb"); //hambuger menu
const menuX = document.querySelector(".menu-x"); //closing icon
const menuMobileContainer = document.querySelector('.menu-mobile-container') //mobil menu
const menuMobileBg = document.querySelector(".menu-mobile-bg");



// const menuMobileList = document.querySelector(".menu-mobile-list");
// const menuMobileBg = document.querySelector(".menu-mobile-bg");
// const nameLogo = document.querySelectorAll(".name-logo");
const main = document.querySelectorAll(".main");
const portfolio = document.querySelectorAll(".portfolio");
const about = document.querySelectorAll(".about");
const contact = document.querySelectorAll(".contact");

// function menuMobileShow(){
//   menuMobileList.classList.add(".menu-mobile-show");
// }

// function menuMobileHide(){
//   menuMobileList.classList.remove(".menu-mobile-show");
// }

// menuMobileHambBtn.addEventListener("click", menuMobileShow);
// menuMobileHambBtn.addEventListener("click", menuMobileHide);


menuHamb.addEventListener('click', ()=>{
  menuMobileContainer.style.display = 'flex';
  menuHamb.style.display = 'none';
  menuX.style.display = 'flex';
  menuMobileBg.style.display = 'flex';
  main.classList.add('.blur');
});

menuX.addEventListener('click', ()=>{
  menuMobileContainer.style.display = 'none';
  menuHamb.style.display = 'flex';
  menuX.style.display = 'none';
  menuMobileBg.style.display = 'none';
})


