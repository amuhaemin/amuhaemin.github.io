function validateForm() {
  const name = document.forms['contactUs']['name'].value;
  const email = document.forms['contactUs']['email'].value;
  //   const interest = document.forms['contactUs']['interest-pick'].value

  if (name == '' || email == '') {
    alert('tidak boleh kosong');
    return false;
  }

  return false;
}

// Slides handler
let slideIndex = 0;
showDiv(slideIndex);

function countDivs(n) {
  showDiv((slideIndex += n));
}

function showDiv(n) {
  let slides = [...document.getElementsByClassName('image-slide')];
  if (n > slides.length - 1) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((e, i) => {
    i != slideIndex ? (e.style.display = 'none') : (e.style.display = 'block');
  });
}

setInterval(() => {
  countDivs(1);
}, 3000);

// Hide Navbar on scroll
function hideNav() {
  var prevScrollpos;
  // = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > prevScrollpos && currentScrollPos > 10) {
      document.getElementById('navbar').style.top = '-164px';
    } else {
      document.getElementById('navbar').style.top = '0px';
    }
    prevScrollpos = currentScrollPos;
  };
}

hideNav();
