const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

const tabItem = document.querySelectorAll(".tabs__btn--item");
const tabContent = document.querySelectorAll(".tab__content--item");

tabItem.forEach((el) => {
  el.addEventListener("click", open);
});

function open(e) {
  const tabTarget = e.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach((item) => {
    item.classList.remove("activeTabs");
  });
  tabTarget.classList.add("activeTabs");

  tabContent.forEach((item) => {
    item.classList.remove("activeTabs");
  });
  document.querySelector(`#${button}`).classList.add("activeTabs");
}

const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");

menuBtn.addEventListener('click',()=>{
  menuList.classList.toggle('activeMenu');
})