jQuery(document).ready(function($) {
    /*
    ** Mobile navigation slide toggle animation
    */
    var headerHeight = $('header').outerHeight();

    $('.toggle-nav-mobile').click(function () {
        $('nav').css('top', headerHeight);
        $('nav').stop().slideToggle();
        $('body').toggleClass('no-scroll');
        $('.toggle-nav-mobile').toggleClass('is-open');
    });

    $(window).resize(function() {
        if ($(window).width() > 780 && ($('nav').css('display') === 'none' || $('nav').css('top', headerHeight))) {
            $('nav').css('display', '');
            $('nav').css('top', '');
            $('nav').css('height', '100%');
            if ($('body').hasClass('no-scroll')) {
                $('body').toggleClass('no-scroll');
            }
        }
    });
});
