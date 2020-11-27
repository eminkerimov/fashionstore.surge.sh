
$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2500,
        prevArrow: $('.main-arrow-left'),
        nextArrow: $('.main-arrow-right'),
        fade: true,
    });
    $('.slider1').slick({
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    var slick = {
        1: { slider: '.slider2', prev: '.man-left', next: '.man-right' },
        2: { slider: '.slider3', prev: '.woman-left', next: '.woman-right' }
    }

    $.each(slick, function () {
        $(this.slider).slick({
            arrows: true,
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            speed: 2000,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 2500,
            prevArrow: $(this.prev),
            nextArrow: $(this.next),
            responsive: [
                {
                    breakpoint: 980,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });

    var sliders = {
        1: { slider: '#new-arrivals', nav: '#best-sellers,#popular', arrows: true },
        2: { slider: '#best-sellers', nav: '#new-arrivals,#popular', arrows: false },
        3: { slider: '#popular', nav: '#new-arrivals,#best-sellers', arrows: false }
    }

    $.each(sliders, function () {
        $(this.slider).slick({
            arrows: this.arrows,
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            speed: 2000,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 2500,
            prevArrow: $('.tabs-arrow-left'),
            nextArrow: $('.tabs-arrow-right'),
            asNavFor: this.nav
        });
    });

    //-----------------------


    // Tabs -----------------

    $('.tab-link').click(function (e) {
        e.preventDefault();

        $('.tab-link').removeClass('tab-link-active');
        $('.tab-content').removeClass('tab-content-active');

        $(this).addClass('tab-link-active');
        $($(this).attr('href')).addClass('tab-content-active');

    });

    $('.tab-link:first').click();

    // -------------------

});