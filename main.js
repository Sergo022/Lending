document.addEventListener("click",documentActions);
function documentActions(e){
    const targetElement=e.target;


    if(targetElement.closest('.category')){
        document.documentElement.classList.toggle('active');
    }



    if(targetElement.closest('[data-goto]')){
        ////////щоб при натиску на ссилку закривалось меню і рухалось до певного пункту
        document.documentElement.classList.contains('active') ?
        document.documentElement.classList.remove('active'):null;
     
       //// для того щоб був плавний скрол(класна штука)
        const goTo = targetElement.closest('[data-goto]').dataset.goto;
        const goToElement = document.querySelector(goTo);
        const headerHeight = document.querySelector('.header').offsetHeight;

        if(goToElement){
            window.scrollTo({
                top: goToElement.offsetTop - (headerHeight +15),
                behavior:"smooth"
            });
        }
        e.preventDefault();
    }
}
new Swiper('.swiper-container',{
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 3,
    spaceBetween: 30,
    // breakpoints:{
    //     350:{
    //         slidesPerView: 1,
    //     },
    //     450:{
    //         slidesPerView: 2,
    //     },
    //     1070:{
    //         slidesPerView: 3,
    //     },
    // }
});


$(document).ready(function(){
    $('.news_card').first().addClass('active').next().slideToggle(0);
    $('.news_card').click(function(event){
         //для того щоб при відкритті другого пункту закривався попередній (заглянути в html)
        if($('.news_cards').hasClass('one')){
            $('.news_card').not($(this)).removeClass('active');
            $('.card_img').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});