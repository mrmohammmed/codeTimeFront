$(document).ready(function () {

    $('.client-single').on('click', function (event) {
        event.preventDefault();

        var active = $(this).hasClass('active');

        var parent = $(this).parents('.testi-wrap');

        if (!active) {
            var activeBlock = parent.find('.client-single.active');

            var currentPos = $(this).attr('data-position');

            var newPos = activeBlock.attr('data-position');

            activeBlock.removeClass('active').removeClass(newPos).addClass('inactive').addClass(currentPos);
            activeBlock.attr('data-position', currentPos);

            $(this).addClass('active').removeClass('inactive').removeClass(currentPos).addClass(newPos);
            $(this).attr('data-position', newPos);

        }
    });

}(jQuery));








AOS.init();

$(document).ready(function () {

    $('#worksCodeTime').owlCarousel({
        autoplay: true,
        rtl: true,
        loop: true,
        URLhashListener: true,
        autoplayHoverPause: true,
        margin: 0,
        nav: true,
        dots: true,
        transitionStyle: true,
        autoplayTimeout: 10000,
        center: true,
        navText: [
            "<i class='fa fa-chevron-right'></i>",
            "<i class='fa fa-chevron-left'></i>"
        ],
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });


    $('#client').owlCarousel({
        autoplay: true,
        rtl: true,
        loop: true,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        margin: 20,
        transitionStyle: true,
        autoplayTimeout: 10000,
        navText: false,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    });


});




