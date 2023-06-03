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
