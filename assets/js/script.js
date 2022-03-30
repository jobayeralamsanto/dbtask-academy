 // Hide Navbar on scroll down
 var prevScrollpos = window.pageYOffset;
 window.onscroll = function() {
     var currentScrollPos = window.pageYOffset;
     if (prevScrollpos > currentScrollPos) {
         document.getElementById("navbar").style.top = "0";
     } else {
         document.getElementById("navbar").style.top = "-80px"; /* width horizontal navbar */
     }
     prevScrollpos = currentScrollPos;

 }

 const mainNavigation = document.querySelector(".main-navigation");
 const overlay = mainNavigation.querySelector(".overlay");
 const toggler = mainNavigation.querySelector(".navbar-toggler");

 const openSideNav = () => mainNavigation.classList.add("active");
 const closeSideNav = () => mainNavigation.classList.remove("active");
 toggler.addEventListener("click", openSideNav);
 overlay.addEventListener("click", closeSideNav);