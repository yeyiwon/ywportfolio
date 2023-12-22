document.addEventListener("DOMContentLoaded", function() {
    var topButton = document.querySelector('.top_btn');

    topButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
