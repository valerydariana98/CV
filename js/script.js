const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const menuLinks = document.querySelectorAll(".nav-menu a");

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

const printBtn = document.querySelector(".nav-download");

printBtn.addEventListener("click", () => {
  window.print();
});