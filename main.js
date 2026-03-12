const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

/* -------------------- Custom Smooth Scroll with Easing -------------------- */
function smoothScrollTo(targetY, duration = 800) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let startTime = null;

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
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

document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const offset = document.querySelector("nav").offsetHeight;
      const offsetPosition = targetElement.offsetTop - offset;
      smoothScrollTo(offsetPosition, 800);
    }

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

ScrollReveal().reveal(".project-card", {
  ...scrollRevealOption,
  interval: 200,
});

ScrollReveal().reveal(".timeline-item", {
  ...scrollRevealOption,
  interval: 150,
});

ScrollReveal().reveal(".skill-group", {
  ...scrollRevealOption,
  interval: 120,
});

ScrollReveal().reveal(".skills-card", {
  ...scrollRevealOption,
  interval: 120,
});

ScrollReveal().reveal(".skills-modern-card", {
  ...scrollRevealOption,
  interval: 120,
});

/* -------------------- Rotating Title Text -------------------- */
const titles = [
  "4th Year Student",
  "Web Developer",
  "UI/UX Designer",
  "Research Assistant",
  "Student Leader",
];

let titleIndex = 0;
const changingText = document.getElementById("changing-text");

function updateTitle() {
  if (!changingText) return;
  changingText.textContent = titles[titleIndex];
  titleIndex = (titleIndex + 1) % titles.length;
}

updateTitle();
setInterval(updateTitle, 2000);

/* -------------------- Timeline Ball Following Curve -------------------- */
document.addEventListener("scroll", updateTimelineBall);
window.addEventListener("load", updateTimelineBall);
window.addEventListener("resize", updateTimelineBall);

function updateTimelineBall() {
  const path = document.querySelector("#snakePath");
  const ball = document.getElementById("timeline-ball");
  const glow = document.getElementById("timeline-ball-glow");
  const ring = document.getElementById("timeline-ball-ring");
  const items = document.querySelectorAll(".timeline-item");
  const timeline = document.querySelector(".timeline");

  if (!path || !ball || !glow || !ring || !timeline) return;

  const timelineRect = timeline.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (timelineRect.top > windowHeight || timelineRect.bottom < 0) return;

  const startOffset = windowHeight * 0.22;
  const effectiveScroll = windowHeight - timelineRect.top - startOffset;

  const progress = Math.min(
    Math.max(
      effectiveScroll / (timelineRect.height + windowHeight - startOffset),
      0
    ),
    1
  );

  const pathLength = path.getTotalLength();
  const point = path.getPointAtLength(progress * pathLength);

  ball.setAttribute("cx", point.x);
  ball.setAttribute("cy", point.y);

  glow.setAttribute("cx", point.x);
  glow.setAttribute("cy", point.y);

  ring.setAttribute("cx", point.x);
  ring.setAttribute("cy", point.y);

  items.forEach((item) => {
    const triggerPoint = item.offsetTop - 110;

    if (point.y >= triggerPoint) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}