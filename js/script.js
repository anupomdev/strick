$(function () {
    var navOff = $('.nav_part').offset().top;

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navOff) {
            $('.nav_part').addClass('head_fixed');
        } else {
            $('.nav_part').removeClass('head_fixed');
        }

    });


    $('.backtop').click(function () {
        $('html,body').animate({
            scrollTop: 0,
        }, 2000);
    });


    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 900) {
            $('.backtop').fadeIn();
        } else {
            $('.backtop').fadeOut();
        }


    });











});