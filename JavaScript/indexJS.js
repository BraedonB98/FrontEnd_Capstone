//HERE IS THE JAVASCRIPT CODE------------------------------------------------------------------------------
window.onscroll = function() {topNavBarStick()};// When the user scrolls the page, execute myFunction
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;// Get the offset position of the navbar


function topNavBarStick() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


//HERE IS THE SLIDE SHOW CODE------------------------------- Needs to be fixed so you can decide on which on you want open

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}