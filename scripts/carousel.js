// Get needed constant value
const width = $('.slider .slide').width();
const slideDuration = $('.slider').data('slideDuration');

// Initialize slide position and move our slider container to the right spot
$('.slider .slide:last').prependTo($('.slider'));
$('.slider').css('left', -width);

const handlePrev = () => {
  $('.slider').animate({ left: 0 }, slideDuration, function () {
    $('.slider .slide:last').prependTo($('.slider'));
    $('.slider').css('left', -width);
  });
};

const handleNext = () => {
  $('.slider').animate({ left: `-=${width}` }, slideDuration, function () {
    $('.slider .slide:first').appendTo($('.slider'));
    $('.slider').css('left', -width);
  });
};

$('.next.slider-control').on('click', () => handleNext());
$('.prev.slider-control').on('click', () => handlePrev());
