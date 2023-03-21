$('.menuSection .menuBlock .menu-list .item .img').height(
    $('.menuSection .menuBlock .menu-list .item .img').width()*9/16
)

new Swiper(".gallerySlider", {
    slidesPerView: 3,
    spaceBetween: 24,
    navigation: {
        nextEl: ".gallerySlider .swiper-button-next",
        prevEl: ".gallerySlider .swiper-button-prev",
    },
});

$('.menuListSection .menuListBlock .product .gallery .swiper .img img').on('click', function() {
    let link = $(this).attr('src'),
        linkMainPhoto = $('.menuListSection .menuListBlock .product .gallery > .img img')
    linkMainPhoto.attr('src', link)
})


$.mask.definitions['h'] = "[0|1|3|4|5|6|7|9]"
$(".mask-phone").mask("+7 (h99) 999-99-99");

$('header .burger').on('click', function() {
    $('.menu-open').addClass('active')
    $('body').css({
        'overflow': 'hidden',
    })
})

$('.menu-open .btn-close').on('click', function() {
    $('.menu-open').removeClass('active')
    $('body').css({
        'overflow': 'auto',
    })
})

$(document).ready(function(){
    headerTop()
})

$(window).resize(function(){
    headerTop()
})

function headerTop() {
    let h = 0
    $('body').width()>759 ? h=0 : h=$('header').height()
    $('main').css ({
        'margin-top': `${h}px`
    })
}