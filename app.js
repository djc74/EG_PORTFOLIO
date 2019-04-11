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

//slick carousel

// $(document).ready(function(){
//   $('.carousel').slick({
//     dots: true
//   });
// });

//touch

let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

const gestureZone = document.getElementById('swipe');

gestureZone.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

gestureZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false);

function handleGesture() {
    if (touchendX < touchstartX) {
      plusSlides(1);
    }

    if (touchendX > touchstartX) {
        plusSlides(-1);
    }

    if (touchendY < touchstartY) {
        plusSlides(1);
    }

    if (touchendY > touchstartY) {
       plusSlides(-1);
    }

    if (touchendY === touchstartY) {
       console.log('Tap');
    }
}
