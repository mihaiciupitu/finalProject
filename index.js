const icon = document.getElementById("icon");
const imgdark = document.querySelector(".image");
const logodark = document.querySelector(".logo");
const logo2dark = document.querySelector(".logo2");
const logo3dark = document.querySelector(".logo3");
let pro = document.querySelectorAll(".des a");
let pro2 = document.querySelectorAll(".pro");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");

  logodark.classList.toggle("logo-dark");
  logo2dark.classList.toggle("logo-dark");
  logo3dark.classList.toggle("logo-dark");
  pro.forEach((element) => {
    element.classList.toggle("products-dark");
  });
  pro2.forEach((element2) => {
    if (document.body.classList.contains("dark-theme")) {
      element2.style.backgroundColor = "var(--secondary-color)";
    } else {
      element2.style.backgroundColor = "#e4e4e4";
    }
  });
  if (document.body.classList.contains("dark-theme")) icon.src = "sun.png";
  else icon.src = "moon.png";
};
