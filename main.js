const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h5", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__content .links", {
  ...scrollRevealOption,
  delay: 2000,
});


const titles = ["3rd year Student", "Web Developer", "UI/UX Designer", "Research Assistant", "Teaching Assistant"];
let titleIndex = 0;

function updateTitle() {
  const titleElement = document.querySelector(".header__content h1"); 
  titleElement.innerHTML = `Hi, I am <span>Jai Sachdeva</span> a ${titles[titleIndex]}`;
  titleIndex = (titleIndex + 1) % titles.length; // Loop back to start
}

// Change title every 2 seconds
setInterval(updateTitle, 2000);