$(function () {

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 400) {
            $("header").addClass("header-scrolled");
            $("nav").addClass("header-scrolled");
            $(".btn--nav").addClass("header-scrolled");
        } else {
            $("header").removeClass("header-scrolled");
            $("nav").removeClass("header-scrolled");
            $(".btn--nav").removeClass("header-scrolled");
        }
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 85 + "px")
        }, 900, 'easeInOutExpo');
        event.preventDefault();
    });

});