/////////// Image Slider ////////////
var slideIndex = 1;
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
  var i;
  var slides = document.getElementsByClassName("imgAll");
  if (n > slides.length) { 
    slideIndex = 1 
  }
  if (n < 1) { 
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

/////////// Calculator ////////////

var inpField = document.getElementById("calcField")
function calculate(val) {
  inpField.value += val
}
function answer(){
  inpField.value = eval(inpField.value)
}
function clearField(){
  inpField.value = " ";
}