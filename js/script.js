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
