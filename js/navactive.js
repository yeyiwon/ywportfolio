$(document).ready(function () {
    var navbarLinks = $(".navbar a");

    function changeLinkColorAndSetActive() {
        var scrollPos = $(window).scrollTop();

        navbarLinks.each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));

            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                navbarLinks.removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });

    }

    $(window).scroll(changeLinkColorAndSetActive);
});
