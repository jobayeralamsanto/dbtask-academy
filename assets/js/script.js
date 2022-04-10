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

 //  back to top button

 var btn = $('#back-to-top');

 $(window).scroll(function() {
     if ($(window).scrollTop() > 300) {
         btn.addClass('show');
     } else {
         btn.removeClass('show');
     }
 });

 btn.on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({ scrollTop: 0 }, '300');
 });

 //  script for owl carousel 
 $('.owl-carousel').owlCarousel({
     loop: true,
     margin: 10,
     responsiveClass: true,
     dots: true,

     responsive: {
         0: {
             items: 1,
             dots: true
         },
         768: {
             items: 2,
             dots: true
         },
         1000: {
             items: 3,
             dots: true,
             loop: false
         }
     }
 })

 /* Brand Slider Start */
 $('.brand_slider_container').slick({
         slidesToShow: 6,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 2000,
         loop: true,
         arrows: false,
         prevArrow: '<i class="fas fa-chevron-left slider_arrow slider_arrow_left"></i>',
         nextArrow: '<i class="fas fa-chevron-right slider_arrow slider_arrow_right"></i>',
         responsive: [{
             breakpoint: 1025,
             settings: {
                 slidesToShow: 3,
                 slidesToScroll: 3,
                 infinite: true,
                 dots: false
             }
         }, {
             breakpoint: 768,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2
             }
         }, {
             breakpoint: 520,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
         }]
     })
     /* //Brand Slider End */