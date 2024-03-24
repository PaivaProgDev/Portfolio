window.scrollAnimate = new ScrollReveal({ reset: true });
scrollAnimate.reveal('.info-box', {
    duration: 1300,
    distance: '100px',
    origin: 'left'
})

scrollAnimate.reveal('.image-guidev-home', {
    duration: 1200,
    distance: '100px',
    origin: 'bottom'
})

scrollAnimate.reveal('.animate-reveal-aboutme', {
    duration: 1000,
    distance: '100px',
    origin: 'left'
})

scrollAnimate.reveal('.card-front', {
    duration: 1000,
    distance: '100px',
    origin: 'left'
})

// Modo dark e light
document.querySelector('.input-toggle-theme').addEventListener('change', () => {
    document.querySelector('html').classList.toggle('dark-mode')
})

// Menu mobile
let itemsMenu = document.querySelector('.items-nav-links')
let backdropMenu = document.querySelector('.backdrop-menu')

let btnMenu = document.querySelectorAll('.menu-mobile-icon')
btnMenu.forEach((modalCloseAction) => {
    modalCloseAction.addEventListener('click', () => {
        itemsMenu.classList.toggle('show-menu')
        backdropMenu.classList.toggle('active-menu-backdrop')

        setTimeout(() => {
            document.querySelector('body').classList.toggle('menu-desactive-scroll')
        }, '200')

        setTimeout(() => {
            document.querySelector('.close-button-menu').classList.toggle('rotate')
        }, '500')

    })

})

// Script header scroll
window.addEventListener("scroll", () => {
    let headerScroll = document.querySelector(".top-header");
    headerScroll.classList.toggle("roll", window.scrollY > 0);

    let logoScroll = document.querySelector(".logo-scroll");
    let logoHeader = document.querySelector(".logo");

    // Troca a logo ao usar o scroll
    if (headerScroll.classList.contains("roll")) {
        logoHeader.style.display = "none";
        logoScroll.style.display = "block";
    } else {
        logoHeader.style.display = "block";
        logoScroll.style.display = "none";
    }

});

// Script flip card
let flipCard = document.querySelectorAll(".flip-card");
flipCard.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.toggle("flip");
    });
});

// Modal projetos
let cardsModal = document.querySelectorAll('.modal-open');
cardsModal.forEach((modalWindow) => {

    modalWindow.addEventListener('click', () => {
        let modal = modalWindow.getAttribute('data-modal')
        document.getElementById(modal).style.display = 'flex'

    })

    let btnClose = document.querySelectorAll('.btn-close-modal')
    btnClose.forEach((modalClose) => {
        modalClose.addEventListener('click', () => {
            modalClose.closest('.modal').style.display = 'none'
        })
    })

    document.addEventListener('click', (focusModal) => {
        if (focusModal.target.className == 'modal') {
            focusModal.target.style.display = 'none'
        }
    })

})

// Formulário validado
const form = document.querySelector('#form');
const textInput = document.querySelector('#message-form')
const field = document.querySelectorAll('.required')
const messageValid = document.querySelectorAll('.message-required')
const btnSubmit = document.querySelector('btn-form-submit')
const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

function setError(index) {
    field[index].style.border = '1px solid red'
    field[index].style.background = '#fff'
    messageValid[index].style.opacity = '1'
}

function removeError(index) {
    field[index].style.border = ''
    field[index].style.background = '#fff'
    messageValid[index].style.opacity = '0'
}

function nameValid() {
    if (field[0].value.length < 3) {
        setError(0)
    } else {
        removeError(0)
    }

    if (field[0].value.length == 0) {
        removeError(0)
    }
}

function emailValid() {
    if (!regex.test(field[1].value)) {
        setError(1)
    } else {
        removeError(1)
    }

    if (field[1].value.length == 0) {
        removeError(1)
    }
}




