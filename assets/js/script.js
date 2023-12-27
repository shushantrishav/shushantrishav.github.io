// Create a function to handle the intersection callback
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    const sectionId = entry.target.getAttribute("id");
    const navLink = document.querySelector(
      `.nav-links li a[href="#${sectionId}"]`
    );
    if (navLink !== null) {
      if (entry.isIntersecting) {
        // Add the "active" class to the corresponding nav link
        navLink.classList.add("active");
      } else {
        // Remove the "active" class from the nav link
        navLink.classList.remove("active");
      }
    }
  });
}

// Create the Intersection Observer instance
const observer = new IntersectionObserver(handleIntersection, {
  root: null, // Use the viewport as the root element
  rootMargin: "-50% 0px", // Trigger when the top of the section is near the top of the display
  threshold: 0, // Trigger when the section is fully visible
});


// Observe each section
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

const banner = document.querySelector(".canvas");
const navbar = document.querySelector(".navbar ");
window.onscroll = () => {
  this.scrollY > 10
    ? banner.classList.add("hidden") | navbar.classList.add("sticky")
    : banner.classList.remove("hidden") | navbar.classList.remove("sticky");
};
function SubForm() {
  $.ajax({
    url: "https://api.apispreadsheets.com/data/TI9POZvvjpBfQW1t/",
    type: "post",
    data: $("#myForm").serializeArray(),
    success: function () {
      alert("Form Data Submitted");
      $("#myForm")[0].reset();
    },
    error: function () {
      alert("There was an error :(");
    },
  });
}
