$(document).ready(function() {

  $('.slider').slick({
    centerMode: true,
    Padding: '60px',
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [{
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    }, {
      breakpoint: 786,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });

  $('.slider-category').slick({
    variableWidth: true,
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 10,
    slidesToScroll: 3,
  });

  $sliderCategory__link = $('.slider-category__link');
  $sliderCategory__link.on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('slider-category__link_active');
  });

  $fa_eye = $('.fa-eye');
  $fa_eye.on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('fa-eye_active');
  });

  $fa_heart = $('.fa-heart');
  $fa_heart.on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('fa-heart_active');
  });

  function hover(indentificator) {
    document.querySelector(indentificator).onmousemove = (e) => {
      let x = e.pageX - e.target.offsetLeft;
      let y = e.pageY - e.target.offsetTop;

      e.target.style.setProperty('--x', `${ x }px`);
      e.target.style.setProperty('--y', `${ y }px`);
    }
  }

  hover('.button-load');
  hover('.button-load2');
  hover('.control_play');
  hover('.control_play2');
  hover('.control_play3');
  hover('.control_play4');
  hover('.control_add');
  hover('.control_add2');
  hover('.control_add3');
  hover('.control_add4');

});