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
// SLIDER 
class SlideStories {
    constructor(id) {
        this.slide = document.querySelector(`[data-slide="${id}"]`);
        this.init();
    }

    activeSlide(index) {
        this.active = index;
        this.itens.forEach(item => {
            item.classList.remove('active');
        });
        this.itens[index].classList.add('active');

        this.thumbItens.forEach(item => {
            item.classList.remove('active');
        });
        this.thumbItens[index].classList.add('active');
        this.autoSlide();
    }

    prev() {
        if (this.active > 0) {
            this.activeSlide(this.active - 1);
        } else {
            this.activeSlide(this.itens.length - 1);
        }
    }
    
    next() {
        if (this.active < this.itens.length - 1) {
            this.activeSlide(this.active + 1);
        } else {
            this.activeSlide(0);
        }
    }

    addNavigation() {
        const nextBtn = this.slide.querySelector('.slide-next');
        const prevBtn = this.slide.querySelector('.slide-prev');
        nextBtn.addEventListener('click', this.next);
        prevBtn.addEventListener('click', this.prev);
    }

    addThunbItens() {
        this.itens.forEach(() => (this.thumb.innerHTML += '<span></span>'));
        this.thumbItens = Array.from(this.thumb.children);
    }

    autoSlide() {
        clearTimeout(this.timeOut);
        this.timeOut = setTimeout(this.next, 5000);
    }

    init() {
        this.itens = this.slide.querySelectorAll('.slide-itens > *');
        this.thumb = this.slide.querySelector('.slide-thumb');
        this.addThunbItens();
        this.active = 0;
        this.activeSlide(0);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.addNavigation();
        this.autoSlide()
        
    }  
}
new SlideStories('slide')
// FIM SLIDER