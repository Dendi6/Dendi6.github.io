import './styles/js/time.js';

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems,{
        fullWidth: true
    });
});