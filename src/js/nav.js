jQuery(document).ready(function($) {
    /*
    ** Mobile navigation slide toggle animation
    */
    var getHeaderHeight = $('header').outerHeight(),
        headerPadding = parseInt(getHeaderHeight) + 12,
        headerHeight = headerPadding.toString() + 'px';

    $('.toggle-nav-mobile').click(function () {
        $('nav').css('padding-top', headerHeight);
        $('nav').stop().slideToggle();
        $('.toggle-nav-mobile').toggleClass('is-open');
    });

    $(window).resize(function() {
        if ($(window).width() > 780) {
            if ($('nav').css('display') === 'none') {
                $('nav').css('display', '');
            }
            if ($('nav').css('padding-top') === headerHeight) {
                $('nav').css('padding-top', '');
            }
            if ($('nav').css('height') !== '100%') {
                $('nav').css('height', '100%');
            }
        }
    });
});
