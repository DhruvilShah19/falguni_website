$(document).ready(function() {
    var sections = $('section');
    var navLinks = $('.nav-link');

    function updateUrl(sectionId) {
        history.pushState(null, null, '#' + sectionId);
    }

    function setActiveNavLink(sectionId) {
        navLinks.each(function() {
            $(this).toggleClass('active', $(this).attr('href') === '#' + sectionId);
        });
    }

    $(window).on('scroll', function() {
        var scrollPosition = $(window).scrollTop();

        sections.each(function() {
            var currentSection = $(this);
            if (currentSection.offset().top <= scrollPosition && currentSection.offset().top + currentSection.outerHeight() > scrollPosition) {
                var sectionId = currentSection.attr('id');
                updateUrl(sectionId);
                setActiveNavLink(sectionId);
            }
        });
    });
});
