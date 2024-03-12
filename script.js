// scrol reveal

var slideUp = {
    distance: '150%',
    origin: 'top',
    opacity: null,
    duration: 2200
};
var slideUpM ={
    distance: '170%',
    origin: 'top',
    opacity: null,
    duration: 800,
    delay: 2500

}
var slideRigth ={ 
    distance: '150%',
    origin: 'bottom',
    opacity: null,
    duration: 2200
};

    



ScrollReveal().reveal('.container', slideUp);
ScrollReveal().reveal('.principal', slideRigth);
ScrollReveal().reveal('.popup', slideUpM,);


// animaçoes


