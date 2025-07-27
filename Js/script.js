function setupToggle(buttons, sections) {
  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      // Toggle button active classes
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Show/Hide corresponding section
      sections.forEach((sec, i) => {
        sec.style.display = i === index ? "block" : "none";
      });
    });
  });
}

// ==== Group 1: Skills vs Certificates ====
const skillsBtns = [document.getElementById("skillsBtn"), document.getElementById("certsBtn")];
const skillsSections = [document.getElementById("map"), document.getElementById("certList")];
setupToggle(skillsBtns, skillsSections);

// ==== Group 2: Projects vs APIs ====
const projectBtns = [document.getElementById("projectsBtn"), document.getElementById("apisBtn")];
const projectSections = [document.getElementById("projectsList"), document.getElementById("apiList")];
setupToggle(projectBtns, projectSections);
