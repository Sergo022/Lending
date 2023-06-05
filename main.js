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



//функції що показують/ховають пароль і задають іконці opsity
function togglePasswordVisibility1() {
    var passwordInput = document.getElementById("pass1");
    var image = document.getElementById("hidevis1");
    

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
    var image = document.getElementById("hidevis");
    

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


