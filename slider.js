//слайдер
new Swiper('.swiper-container',{
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints:{
        320:{
            slidesPerView: 1,
        },
        510:{
            slidesPerView: 2,
        },
        1000:{
            slidesPerView: 3,
        },
    }
});
