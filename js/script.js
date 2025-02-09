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






$(document).ready(function () {
  var slider = $(".responsives");

  // Initialize the Slick Slider
  function initializeSlick() {
    slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: "unslick"
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }


    // Custom navigation buttons
    $(".memo-app-slider--nav-item.prev").click(function() {
      slider.slick("slickPrev"); // Move to previous slide
    });
  
    $(".memo-app-slider--nav-item.next").click(function() {
      slider.slick("slickNext"); // Move to next slide
    });

  // Check for screen size on load and resize
  function checkScreenSize() {
    if ($(window).width() > 1024) {
      if (slider.hasClass("slick-initialized")) {
        // Uninitialize Slick (remove it completely)
        slider.slick("unslick");
        // Add any additional CSS changes here, if needed, for desktop
        $(".memo-app-slider__inner_list-item").css("display", "block");
      }
    } else {
      if (!slider.hasClass("slick-initialized")) {
        // Initialize Slick again for mobile/tablet screens
        initializeSlick();
      }
    }
  }

  // Initialize on page load
  checkScreenSize();

  // Check on window resize
  $(window).resize(function () {
    checkScreenSize();
  });
});
