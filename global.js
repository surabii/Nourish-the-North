// back to top button

// Get the button:
let mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// impact on canadians slideshow

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}


// impact on canadians - mouseover facts 
function showDescription(event, text) {
  // Hide the fact-title element
  const titleElement = event.currentTarget.querySelector('.fact-title');
  titleElement.style.display = 'none';

  // Find the fact-description element and update its content
  const descriptionElement = event.currentTarget.querySelector('.fact-description');
  descriptionElement.textContent = text;

  // Show the fact-description element
  descriptionElement.style.display = 'block';
}

function hideDescription(event) {
  // Show the fact-title element
  const titleElement = event.currentTarget.querySelector('.fact-title');
  titleElement.style.display = 'block';

  // Hide the fact-description element
  const descriptionElement = event.currentTarget.querySelector('.fact-description');
  descriptionElement.style.display = 'none';
}
