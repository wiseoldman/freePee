jQuery(document).ready(function($) {
    /*
    ** Mobile navigation slide toggle animation
    */
    var headerHeight = $('header').outerHeight() + 12;

    $('.toggle-nav-mobile').click(function () {
        $('nav').css('padding-top', headerHeight);
        $('nav').stop().slideToggle();
        $('.toggle-nav-mobile').toggleClass('is-open');
    });

    $(window).resize(function() {
        if ($(window).width() > 780) {
            if ($('nav').css('display', 'none')) {
                $('nav').css('display', '');
            } else if ($('nav').css('padding-top', headerHeight)) {
                $('nav').css('padding-top', '');
            }
            $('nav').css('height', '100%');            
        }
    });
});
