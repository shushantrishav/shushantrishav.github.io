// Initialize AOS (Animate On Scroll)
AOS.init();

// Manually trigger AOS animation on .model
document.querySelector(".model").classList.add("aos-animate");

// Handle hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

// Toggle dropdown on hamburger click
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close dropdown when any nav link is clicked
navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});
