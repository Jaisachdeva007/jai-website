const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

/* -------------------- Custom Smooth Scroll with Easing -------------------- */
function smoothScrollTo(targetY, duration = 800) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let startTime = null;

  function easeInOutQuad(t) {
    return t < 0.5
      ? 2 * t * t
      : -1 + (4 - 2 * t) * t;
  }

  function step(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easedProgress = easeInOutQuad(progress);

    window.scrollTo(0, startY + diff * easedProgress);

    if (timeElapsed < duration) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const offset = document.querySelector("nav").offsetHeight;
      const offsetPosition = targetElement.offsetTop - offset;
      smoothScrollTo(offsetPosition, 800); // glide to target in 0.8s
    }

    // Close mobile menu after click
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });
});

/* -------------------- Mobile Menu Toggle -------------------- */
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

/* -------------------- ScrollReveal Animations -------------------- */
const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", { ...scrollRevealOption, origin: "right" });
ScrollReveal().reveal(".header__content h5", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".header__content h1", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".header__content p", { ...scrollRevealOption, delay: 1500 });
ScrollReveal().reveal(".header__content .links", { ...scrollRevealOption, delay: 2000 });
ScrollReveal().reveal(".project-card", { ...scrollRevealOption, interval: 200 });

/* -------------------- Rotating Title Text -------------------- */
const titles = [
  "4th year Student",
  "Web Developer",
  "UI/UX Designer",
  "Research Assistant",
  "Teaching Assistant"
];
let titleIndex = 0;

function updateTitle() {
  const titleElement = document.querySelector(".header__content h1");
  titleElement.innerHTML = `Hi, I am <span>Jai Sachdeva</span> a ${titles[titleIndex]}`;
  titleIndex = (titleIndex + 1) % titles.length;
}

document.addEventListener("scroll", () => {
  const timeline = document.querySelector(".timeline");
  const items = document.querySelectorAll(".timeline-item");
  const ball = document.getElementById("timeline-ball");

  if (!timeline) return;

  const rect = timeline.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Scroll progress 0 → 1
  const progress = Math.min(
    Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0),
    1
  );

  // Ball follows the vertical line
  const y = progress * timeline.offsetHeight;
  ball.style.top = `${y}px`;

  // Highlight items when ball passes
  items.forEach((item, index) => {
    const itemTop = item.offsetTop;
    const itemMid = itemTop + item.offsetHeight / 2;

    if (y >= itemMid - 100) {
      item.classList.add("active");
    }
  });
});
