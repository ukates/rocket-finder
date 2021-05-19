const menuBtn = document.querySelector('.menu-button'); 
const slideMenu = document.querySelector('.slide-menu');
const aboutDiv= document.querySelector('.about');  

menuBtn.addEventListener('click', () => {
    slideMenu.classList.toggle('open');
    aboutDiv.classList.toggle('open');
}); 


