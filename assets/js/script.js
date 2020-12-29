$('.header_nav ul li').on('click', function() {
    $(this).addClass('active')
        .siblings().removeClass('active');
});
jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});
$(document).ready(function(){
    $(".advantages-slider").owlCarousel({
        items: 5,
        loop:true,
        nav:true,
        navText:true,
        margin:0,
        responsive: {
            0:{
                items: 1
            },
            480:{
                items:2
            },
            767:{
                items:2
            },
            991:{
                items:3
            },
            1200:{
                items:5
            }
        }
    });
});
$(document).ready(function(){
    $(".our-branches_slider").owlCarousel({
        items: 1,
        loop:true,
        nav:true,
        navText:true,
        margin:0,
        responsive: {
            0:{
                items: 1
            },
            480:{
                items:1
            },
            767:{
                items:1
            },
            991:{
                items:1
            }
        }
    });
});
$(document).ready(function(){
    $(".branches-mobile-slider").owlCarousel({
        items: 1,
        loop:true,
        nav:false,
        margin:40
    });
});
$(document).ready(function(){
    $(".nav-mobile_slider").owlCarousel({
        items: 1,
        loop:true,
        dots:false,
        nav:true,
        margin:0,
    });
});
function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find(".burger-menu_button");
    let links = menu.find("burger-menu_link");
    let overlay = menu.find("burger-menu_overlay");
    button.on("click",(e) => {
        e.preventDefault();
        toogleMenu();
    });
    links.on("click", () => toogleMenu());
    overlay.on("click", () => toogleMenu());
    function toogleMenu() {
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css("overflow","hidden");
        }else  {
            $("body").css("overflow","visible")
        }
    }
}
burgerMenu('.burger-menu');

$('.burger-menu_link').on('click',function () {
    $('.burger-menu').removeClass('burger-menu_active')
    $('.burger-menu_nav').removeClass('burger-menu_active')

});

