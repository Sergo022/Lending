//акордеон
if ($(window).width() > 940) {
    $(document).ready(function(){
            $('.news_card').first().addClass('active').next().slideToggle(0);
            $('.news_card').click(function(event){
                //для того щоб при відкритті другого пункту закривався попередній (заглянути в html)
                if($('.news_cards').hasClass('one')){
                    $('.news_card').not($(this)).removeClass('active');
                    $('.card_img').not($(this).next()).slideUp(300);
                }
                $(this).toggleClass('active').next().slideToggle();
            });       
    });
}
