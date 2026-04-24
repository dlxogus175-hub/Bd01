$(function () {

    lucide.createIcons();


    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });


    $(window).on('scroll', function () {
        let num = $(window).scrollTop();

        $('.header').toggleClass('on', num > 0);
        $('.to_top').toggleClass('on', num > 800);
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });


    const portfolioSwipers = [];

    $('.portfolio_slide').each(function (idx, el) {

        const slideCount = $(el).find('.swiper-slide').length;
        const isSingle = slideCount <= 1;

        const swiper = new Swiper(el, {
            effect: 'fade',
            fadeEffect: { crossFade: true },

            loop: !isSingle,
            allowTouchMove: !isSingle,
            speed: 500,

            navigation: {
                nextEl: $(el).find('.next')[0],
                prevEl: $(el).find('.prev')[0],
            },

            observer: true,
            observeParents: true,
        });

        // UI만 제어 (이게 핵심)
        if (isSingle) {
            $(el).find('.arrow_btn').hide();
        }

        portfolioSwipers.push(swiper);
    });


    $('.tab_menu button').on('click', function () {
        const i = $(this).index();

        $(this).addClass('on').siblings().removeClass('on');
        $('.tab_con').eq(i).addClass('on').siblings().removeClass('on');

        if (portfolioSwipers[i]) {
            portfolioSwipers[i].update();
        }
    });


    $('#fl').on('change', function () {
        let lnk = $(this).val();
        if (lnk) window.open(lnk);
    });

});




