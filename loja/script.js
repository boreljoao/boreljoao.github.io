
var slideBottom = {
    duration: 1400,
    origin: 'top',
    opacity: null,
    distance: '150%'
}

ScrollReveal().reveal('.containerf', slideBottom);
setTimeout(function(){
    document.body.classList.add('body-ativo')
}, 800)