/* BOTON MENU */
const button = document.querySelector('.button-menu')
const nav = document.querySelector('.enlaces')

button.addEventListener('click',() =>{
    nav.classList.toggle('activo')
})

/* MENU FIJO */
window.addEventListener("scroll", function(){
    var nav = this.document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})