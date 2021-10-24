window.onscroll = function() {myFunction()};

const navToggle = document.querySelector('.nav-toggle');
const navItems = document.querySelector('.nav-items');

navToggle.addEventListener("click", () => {
    navItems.classList.toggle("nav-items_visible");

    (navItems.classList.contains("nav-menu_visible")) ? navToggle.setAttribute("arial-lable", "Close menu") : navToggle.setAttribute("arial-lable", "Open menu")
});

const header = document.getElementById("header")
const topPos = header.offsetTop

function myFunction() {
    if (window.pageYOffset >= topPos) {
      header.classList.add("sticky")
    } else {
      header.classList.remove("sticky");
    }
  }