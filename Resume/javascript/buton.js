document.addEventListener('scroll', function() {
    var goTopButton = document.getElementById('go-to-top');
    if (window.scrollY > 100) {
        goTopButton.style.opacity = '1';
    } else {
        goTopButton.style.opacity = '0';
    }
});