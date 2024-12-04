// -----------> jQuery
jQuery(function($) {
    "use strict";

    // -----------------------
    // preloader area here js
    // ------------------------ 
    $(window).on("load", function(){
        $(".preloder").fadeOut(1000);
    });

    // -----------------------
    //  top up button area js
    // ------------------------ 
    $(window).on('scroll', function () {
        if($(this).scrollTop() > 80){
            $(".topUp-btn").fadeIn(1000);
        } else{
            $(".topUp-btn").fadeOut(1000);
        }
    });
    $('topUp-btn').on('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
        e.preventDefault();
    });

    
    // -----------------------
    //  header area here 
    // ------------------------
    // -----------------------
    //  header area here 
    // ------------------------
    // mobile menu bar 
    $(".mobile-menu").on('click', function () {
        $(".off-canvas-menu").toggleClass("off-canvas-menu-active");
        $(".body-overlay").addClass("body-overlay-active");
    });
    // off-close-menu bar
    $(".off-close-menu").on('click', function () {
        $(".off-canvas-menu").removeClass("off-canvas-menu-active");
        $(".body-overlay").removeClass("body-overlay-active");
    });
    // body-overlay here 
    $(".body-overlay").on('click', function () {
        $(".off-canvas-menu").removeClass("off-canvas-menu-active");
        $(".body-overlay").removeClass("body-overlay-active");
    });
    // off-canvas-menu link  
    $(".off-menu-link1").on('click', function () {
        $(".off-sub-menu1").toggleClass("active");
        $(".off-sub-menu2").removeClass("active");
    });
    $(".off-menu-link2").on('click', function () {
        $(".off-sub-menu2").toggleClass("active");
        $(".off-sub-menu1").removeClass("active");
    });
    // -----------------------
    // This will create a sticky js
    // -----------------------
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 500) {
            $(".header-area").removeClass("sticky");
        } else {
            $(".header-area").addClass("sticky");
        }
    });

    // -----------------------
    // This will create a counter up js
    // -----------------------
    $('.counter span').counterUp({
        delay: 10,
        time: 1000
    });

    // -----------------------
    // aos animate js
    // -----------------------
    AOS.init({
        duration: 1000,
        once: true
    });

}(jQuery));
/*################## 
--------------------------
- custom js area ends here
--------------------------
##################*/