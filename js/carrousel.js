document.addEventListener('DOMContentLoaded', function() {
    $('.slick-slider').slick({
        centerMode: true,
        slidesToShow: 5, // Nombre d'images visibles en même temps
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        centerPadding: '0', // Réduit l'espacement à gauche et à droite des images centrales
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: '0', // Réduit l'espacement à gauche et à droite des images centrales
                    arrows: false
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding:'1',
                   // Réduit l'espacement à gauche et à droite des images centrales
                    arrows: true
                }
            }
        ]
    });
});
