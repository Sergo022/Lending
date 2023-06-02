//бургер
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

//акордеон
$(document).ready(function(){
    $('.news_card').first().addClass('active').next().slideToggle(0);
    $('.news_card').click(function(event){
         //для того щоб при відкритті другого пункту закривався попередній (заглянути в html)
        if($('.news_cards').hasClass('one')){
            $('.news_card').not($(this)).removeClass('active');
            $('.card_img').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(   );
    });
});

//функції що показують/ховають пароль і задають іконці opsity
function togglePasswordVisibility1() {
    var passwordInput = document.getElementById("pass1");
    var image = document.getElementById("hide1");
    

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      image.style.opacity = "0.5";
    } else {
      passwordInput.type = "password";
      image.style.opacity = "1";
    }
}
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("pass");
    var image = document.getElementById("hide");
    

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      image.style.opacity = "0.5";
    } else {
      passwordInput.type = "password";
      image.style.opacity = "1";
    }
}


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

//==================================теми======================================================================

const lightMode = document.querySelector('.sun');
const darkMode = document.querySelector('.moon');

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

lightMode.onclick = function(){
  document.documentElement.setAttribute('data-theme', 'dark');
  lightMode.style.display = "none";
  darkMode.style.display = "block";
  localStorage.setItem('theme', 'dark');
}

darkMode.onclick = function(){
  document.documentElement.setAttribute('data-theme', 'light');
  lightMode.style.display = "block";
  darkMode.style.display = "none";
  localStorage.setItem('theme', 'light');
}

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        lightMode.style.display = "none";
        darkMode.style.display = "block";
    }
}

//=========================================more btn======================================================================
const buttons = document.querySelectorAll('.main_mo_btn');
const textElements = document.querySelectorAll('.read-more-target');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    textElements.forEach((textElement) => {
      textElement.classList.toggle('showText');
    });
    // Зміна тексту на кнопці
    if (button.innerText === 'Load More') {
        button.innerText = 'Show More';
      } else {
        button.innerText = 'Load More';
      }
  });
});
//==============================sceleton==========================================================
const allSkeleton = document.querySelectorAll('.skeleton')
window.addEventListener('load', function(){
    allSkeleton.forEach(item=>{
        item.classList.remove('skeleton')
    })
})

const allSkeleton1 = document.querySelectorAll('.skeleton-1')
window.addEventListener('load', function(){
    allSkeleton1.forEach(item=>{
        item.classList.remove('skeleton-1')
    })
})

// const allSkeleton = document.querySelectorAll('.skeleton');
// window.addEventListener('load', function() {
//   setTimeout(function() {
//     allSkeleton.forEach(item => {
//       item.classList.remove('skeleton');
//     });
//   }, 1000);
// });

// const allSkeleton1 = document.querySelectorAll('.skeleton-1');
// window.addEventListener('load', function() {
//   setTimeout(function() {
//     allSkeleton1.forEach(item => {
//       item.classList.remove('skeleton-1');
//     });
//   }, 1000);
// });
//===========================================================================================