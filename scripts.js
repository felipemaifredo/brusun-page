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
        this.timeOut = setTimeout(this.next, 10000);
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
// OBSERVAR 
    const observer = new IntersectionObserver( entries => {
        console.log(entries)

        Array.from(entries).forEach( entry => {
            if ( entry.intersectionRatio >= 1) {
                entry.target.classList.add('init-hidden-off')
            }
        })}, {
        threshold: [0, .5, 1]
    });

    Array.from(document.querySelectorAll('.init-hidden')).forEach( element => {
        observer.observe(element)
    });
// FIM OBSERVAR 
// FORM SEND
const documentForm = document.querySelector("form");
const formBtn = document.querySelector("button.form-btn");
const nameIn = document.querySelector("input[name=nome]");
const whatsEmail = document.querySelector("input[name=whatsappemail]")
const assunto = document.querySelector("select[name=assunto]");
const outro = document.querySelector("input[name=outro]")

documentForm.addEventListener("submit", (event) => {
    
    event.preventDefault();

    let  getTime = getHours()
    let nameV =  nameIn.value;
    let whatsEmailV =  whatsEmail.value;
    let assuntoV = assunto.value;
    let outroV = outro.value;


    if ( nameV == "" || whatsEmailV == "" || assuntoV == "" ) {
        formBtn.innerHTML = "Preecha os campos acima";
        setTimeout( () => {
            formBtn.innerHTML = "Enviar";
        }, 5000);
    } else {
        formBtn.innerHTML ='<img src="assets/icons/loading.png">';
        fetch("https://api.sheetmonkey.io/form/7JKr1TpjSCqNPfTEju5jZ8", {
            method: "post",
            headers: { "Accept": "aplication/json", "Content-Type": "application/json" },
            body: JSON.stringify({ nome: nameV, WhatsAppEmail: whatsEmailV, Assunto: assuntoV, Outro: outroV, Quando: getTime }),
        }).then( () => msgEnviada() )
    };
});

function getHours() {
    let timeElapsed = Date.now();
    let today = new Date(timeElapsed);
    return today.toUTCString(); // "Sun, 30 Jan 2022 18:30:00 GMT"
};

function msgEnviada() {
    formBtn.innerHTML = "Mensagem Enviada!";
    setTimeout( () => {
        nameIn.value = "";
        whatsEmail.value = "";
        assunto.value = "Outro";
        formBtn.innerHTML = "Enviar";
    }, 5000);
};

assunto.addEventListener('change', () => {
    if ( assunto.value == "Outro") {
        outro.style.display = "Block";
    } else {
        outro.style.display = "none";
    }
})



function inputOutro() {
    
   
}
// FIM FORM SEND