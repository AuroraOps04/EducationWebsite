const menuBtn = document.querySelector('#menu-btn')
const navbar = document.querySelector('.header__navbar')

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}