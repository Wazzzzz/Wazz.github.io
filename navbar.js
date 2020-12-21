const menu = document.querySelector('.menu');
menu.addEventListener('click', function(){
    menu.parentElement.children[0].classList.toggle('open');
});