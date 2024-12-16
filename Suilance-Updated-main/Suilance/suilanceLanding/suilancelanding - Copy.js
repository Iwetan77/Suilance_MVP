

const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  navbar.classList.toggle('visible');
});

// Typing Effect with Blinking Cursor
function typingEffect(element, textArray, typingDelay = 150, clearingDelay = 1200) {
  let currentIndex = 0;
  let charIndex = 0;
  let isClearing = false;
  const typingText = element.querySelector('.typing-text');

  function type() {
    if (!isClearing && charIndex < textArray[currentIndex].length) {
      // Adding characters one by one
      typingText.textContent += textArray[currentIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else if (!isClearing && charIndex >= textArray[currentIndex].length) {
      // Start clearing once the word is complete
      isClearing = true;
      setTimeout(type, clearingDelay);
    } else if (isClearing && charIndex > 0) {
      // Remove characters one by one
      typingText.textContent = typingText.textContent.slice(0, -1);
      charIndex--;
      setTimeout(type, clearingDelay);
    } else {
      // Move to the next word and start typing
      isClearing = false;
      currentIndex = (currentIndex + 1) % textArray.length;
      setTimeout(type, typingDelay);
    }
  }
  type();
}

const titleElement = document.querySelector('.title');
const textArray = ["Work, Learn, Earn", "For the Community."];
typingEffect(titleElement, textArray, 150, 100);

const testimonialWrapper = document.querySelector('.testimonial-wrapper');
const testimonials = Array.from(document.querySelectorAll('.testimonial'));

// Duplicate testimonials to make scrolling seamless
testimonialWrapper.innerHTML += testimonialWrapper.innerHTML; 
const totalWidth = testimonialWrapper.scrollWidth / 2; // Width of original testimonials only

let scrollPosition = 0;
const scrollSpeed = 1.2; // Adjust this value to control the scroll speed

function scrollTestimonials() {
    scrollPosition -= scrollSpeed;

    // Reset position to create an infinite loop
    if (Math.abs(scrollPosition) >= totalWidth) {
        scrollPosition = 1;
    }

    testimonialWrapper.style.transform = `translateX(${scrollPosition}px)`;
    requestAnimationFrame(scrollTestimonials);
}

scrollTestimonials(); // Start the scrolling

// JavaScript to handle the pop-up functionality
document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("loginBtn");
  const popupForm = document.getElementById("popupForm");
  const closeBtn = document.getElementById("closeBtn");

  // Show pop-up form
  loginBtn.addEventListener("click", () => {
    popupForm.style.display = "flex";
  });

  // Close pop-up form when 'X' is clicked
  closeBtn.addEventListener("click", () => {
    popupForm.style.display = "none";
  });

  // Close pop-up form when clicking outside of the form content
  window.addEventListener("click", (event) => {
    if (event.target === popupForm) {
      popupForm.style.display = "none";
    }
  });
});










/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}



/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.header-container',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

window.addEventListener('scroll', scrollActive)

