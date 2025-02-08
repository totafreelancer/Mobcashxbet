document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  const mainNav = document.querySelector(".main_nav");

  toggler.addEventListener("click", function () {
    mainNav.classList.toggle("show");
  });

  // Navbar এর বাইরে ক্লিক করলে মেনু বন্ধ হবে
  document.addEventListener("click", function (event) {
    if (!mainNav.contains(event.target) && !toggler.contains(event.target)) {
      mainNav.classList.remove("show");
    }
  });
});

window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar-custom");
  if (window.scrollY > 50) {
    navbar.classList.add("shadow-sm");
  } else {
    navbar.classList.remove("shadow-sm");
  }
});




const sliderTrack = document.querySelector('.slider-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const sliderItems = document.querySelectorAll('.slider-item');
        
let currentIndex = 0;
let autoPlayInterval;
const mobileBreakpoint = 768;

        function updateSlider() {
            const slideWidth = sliderItems[0].clientWidth;
            sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % sliderItems.length;
            updateSlider();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
            updateSlider();
        }

        function checkViewport() {
            if (window.innerWidth >= mobileBreakpoint) {
                clearInterval(autoPlayInterval);
                sliderTrack.style.transform = 'none';
            } else {
                startAutoPlay();
            }
        }

        function startAutoPlay() {
            autoPlayInterval = setInterval(nextSlide, 3000);
        }

        // Event Listeners
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
        
        window.addEventListener('resize', () => {
            checkViewport();
            updateSlider();
        });

        // Initial setup
        checkViewport();
        startAutoPlay();