document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Collapse menu on link click
  const navLinkItems = navLinks.querySelectorAll("a");
  navLinkItems.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const welcomeSection = document.querySelector(".welcome");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Only toggle background and shadow, not visibility
        if (!entry.isIntersecting) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      });
    },
    {
      root: null,
      threshold: 0.8,
    }
  );

  if (welcomeSection) {
    observer.observe(welcomeSection);
  }
});
