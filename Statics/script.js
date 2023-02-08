
const navbar = document.querySelector(".navbar");
const banner = document.querySelector(".canvas");
const body = document.querySelector("body");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
};
cancelBtn.onclick = () => {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
};
window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add("sticky")/banner.classList.add("hidden")
    : navbar.classList.remove("sticky")/banner.classList.remove("hidden");
};

const elements = document.getElementsByClassName("alpha");

for (let i = 0; i <= elements.length; i++) {
  elements[i].addEventListener("animationend", function(e) {
    elements[i].classList.remove("animated");
  });

  elements[i].addEventListener("mouseover", function(e) {
    elements[i].classList.add("animated");
  });
}

function toggleMute() {
  var myAudio = document.getElementById('audio_playo24');
  myAudio.muted = !myAudio.muted;
}