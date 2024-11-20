var menuIcon = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');
var sections = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        var top = window.screenY;
        var offset = sec.offsetTop - 150;
        var hight = sec.offsetHeight;
        var id = sec.getAttribute('id');

        if (top >= offset && top < offset ){
            navLinks.forEach(link =>{
                links.classList.remove('active');
                document.querySelector('header nav a')
                    [href*='+ id + '].classList.add
                    ('active')
            })
        }
    })
}


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}