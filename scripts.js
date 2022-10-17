// MENU MOBILE
    const btnMobile = document.querySelector('btn.nav-btn');
    const navItem = document.querySelectorAll('a.item-nav');

    const Nav = document.querySelector('nav#nav');

    function toggleMenu() {
        Nav.classList.toggle('active');
    }

    for (let i = 0; i < navItem.length; i++) { 
        navItem[i].addEventListener('click', () => {
            Nav.classList.toggle('active');
        });
    };
// FIM MENU MOBILE