// Initialize AOS
AOS.init();
document.querySelector(".model")?.classList.add("aos-animate");

// Hamburger logic
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Sticky navbar
const navbar = document.querySelector(".navbar");
const landingSection = document.querySelector(".landing_page");

window.addEventListener("scroll", () => {
  if (!navbar || !landingSection) return;

  const triggerPoint = landingSection.offsetHeight * 0.1;

  if (window.scrollY > triggerPoint) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});