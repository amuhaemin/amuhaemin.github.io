function validateForm() {
  const name = document.forms['contactUs']['name'].value;
  const email = document.forms['contactUs']['email'].value;
  const phone = document.forms['contactUs']['phone'].value;
  const message = document.forms['contactUs']['message'].value;

  if (name == '') {
    alert('Your Name tidak boleh kosong');
    return false;
  }
  if (email == '') {
    alert('Email Address tidak boleh kosong');
    return false;
  }
  if (phone == '') {
    alert('Phone Number tidak boleh kosong');
    return false;
  }
  if (message == '') {
    alert('Ups! Kamu lupa memasukkan message');
    return false;
  }
  alert('Form berhasil dikirim!');
  return true;
}

// Slides handler
let slideIndex = 0;
let testimonyIndex = 0;
showDiv(slideIndex);
showTestimony(testimonyIndex);

function countDivs(n) {
  showDiv((slideIndex += n));
}

function testimonyDivs(n) {
  showTestimony((testimonyIndex += n));
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

function showTestimony(n) {
  let testimony = [...document.getElementsByClassName('testimony')];
  if (n > testimony.length - 1) {
    testimonyIndex = 0;
  }
  testimony.forEach((e, i) => {
    i != testimonyIndex
      ? (e.style.display = 'none')
      : (e.style.display = 'block');
  });
}

setInterval(() => {
  countDivs(1);
  testimonyDivs(1);
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
