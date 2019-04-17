// Animate Smooth Scroll
$('#discoverBtn').on('click', function () {
    const section = $('#section-about').position().top - 175;

    $('html, body').animate({
        scrollTop: section
    }, 900);
});