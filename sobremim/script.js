var slideUp = {
    duration: 1400,
    origin: 'right',
    opacity: null,
    distance: '150%'
}

ScrollReveal().reveal('.containerf', slideUp);
setTimeout(function(){
    document.body.classList.add('body-ativo')
}, 2200)