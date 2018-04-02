  //sidenav

  function openNav() {
    document.getElementById("mySideNav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySideNav").style.width = "0px";
  }

  //carousel

  var slideIndex = 1;
  window.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
    });

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }

  //burger menu

  function burgeropen(e) {
    e.classList.toggle("change");
    if (mySideNav.style.width === "250px") {
        closeNav()
      } else {
        openNav()
      };
    }
