
$(document).ready(function() {
    var navbarLinks = $('.navbar a');

    function changeLinkColor() {
        var scrollPos = $(window).scrollTop();

        var sec0Top = $('#mainpage').offset().top;
        var sec1Top = $('#sec1').offset().top;
        var sec2Top = $('#sec2').offset().top;
        var sec3Top = $('#sec3').offset().top;
        var sec4Top = $('#sec4').offset().top;

        if ((scrollPos >= sec0Top && scrollPos < sec1Top) || 
            (scrollPos >= sec2Top && scrollPos < sec3Top) || 
            scrollPos >= sec4Top) {
            navbarLinks.css('color', '#fffff0');
        } else {
            navbarLinks.css('color', '#25252b'); 
        }
    }

    $(window).scroll(changeLinkColor);
});
