var slideIndex = 0;

function showSlidesauto() {
  var i;
  var slides = document.getElementsByClassName("slideshowimg");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex - 1].className += " active";
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlidesauto, 5000); // Change image every 2 seconds
}


function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  slideIndex=1;  
  var i;
  var slides = document.getElementsByClassName("slideshowimg");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  showSlidesauto();
}


function currentSlideGallary(n) {
  showSlidesGallary((slideIndex = n));
}

function plusSlidesGallary(n) {
  showSlidesGallary((slideIndex += n));
}

function showSlidesGallary(n) {
  var i;
  var slides = document.getElementsByClassName("imageslide");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

slideIndexVideo=1;

function currentVideoSlide(n){
  videoSlide((slideIndexVideo=n));
}

function plusVideoSlide(n){
  videoSlide((slideIndexVideo+=n));
}

function videoSlide(n){
  var i;
  var videos = document.getElementsByClassName("videoslide");
  if (n>videos.length){slideIndexVideo=1}
  if (n<1){slideIndexVideo=videos.length}
  for(i=0;i<videos.length;i++){
    videos[i].style.display="none";
  }
  videos[slideIndexVideo-1].style.display="block";
}