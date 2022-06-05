const slider = $('.products__list').bxSlider({
    controls: false,
    pager: false
});


$('.products__pointer--prev').click(e=> {
    e.preventDefault();
    slider.goToPrevSlide();
});

$('.products__pointer--next').click(e=> {
    e.preventDefault();
    slider.goToNextSlide();
});
