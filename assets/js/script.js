const banner = document.querySelector(".canvas");
window.onscroll = () => {
  this.scrollY > 20
    ? banner.classList.add("hidden")
    : banner.classList.remove("hidden");
};

//nav bar toggle
$(document).ready(function () {
  $(".toggle").click(function () {
    $(".toggle").toggleClass("active");
    $("nav").toggleClass("active");
  });
});
function toggle_close() {
  $(".toggle").toggleClass("active");
  $("nav").toggleClass("active");
}
// change theme
const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");
btn.addEventListener("click", function () {
  // Swap out the URL for the different stylesheets
  if (theme.getAttribute("href") == "./assets/css/style.css") {
    theme.href = "./assets/css/style_dark.css";
  } else {
    theme.href = "./assets/css/style.css";
  }
});
// change icon on click
$(document).ready(() => {
  const a = $(".btn");

  a.click(() => {
    if (a.text() == " ") {
      a.html('<i class="fas fa-sun"></i>');
    } else {
      a.html('<i class="fas fa-moon"></i> ');
    }
  });
});

function toggleMute() {
  var myAudio = document.getElementById("audio_playo24");
  myAudio.muted = !myAudio.muted;

  var audioIcon = document.getElementById("audio_icon");
  if (myAudio.muted) {
    audioIcon.classList.remove("fa-volume-up");
    audioIcon.classList.add("fa-volume-mute");
  } else {
    audioIcon.classList.remove("fa-volume-mute");
    audioIcon.classList.add("fa-volume-up");
  }
}


function SubForm (){
  $.ajax({
    url:"https://api.apispreadsheets.com/data/TI9POZvvjpBfQW1t/",
    type:"post",
    data:$("#myForm").serializeArray(),
    success: function(){
      alert("Form Data Submitted")
      $("#myForm")[0].reset()
    },
    error: function(){
      alert("There was an error :(")
    }
  });
}
