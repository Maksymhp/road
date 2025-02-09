const menuBtn = document.querySelector ('.burger-menu');
const  menu = document.querySelector ('.burger-info');


menuBtn.addEventListener ('click' , () => {
    menu.classList.toggle('burger-info--active');
});