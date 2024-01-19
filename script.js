var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls (if needed in future)
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("simpleSlides")[0].getElementsByTagName("div");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}


  let lastScrollTop = 0;

  window.addEventListener("scroll", function() {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
      // Scrolling verso il basso
      document.querySelector(".header").style.top = "-80px";  // Imposta l'altezza della navbar o valore desiderato
    } else {
      // Scrolling verso l'alto
      document.querySelector(".header").style.top = "0";
    }

    lastScrollTop = currentScrollTop;
  });
