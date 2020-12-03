$(function(){

   $(".rate-star").rateYo({
      rating: 5,
      starWidth: "12px",
      readOnly: true
    });

    $('.product-slider__inner').slick({
         dots:true,
         slidesToShow: 4,
         slidesToScroll: 4,
         arrows:false
    })


    // gamburger menu
    $('.menu__btn').on('click', function(){
$('.menu__list').slideToggle();
    });

    //прячем header__box  
    $('.header__btn-menu').on('click', function(){
$('.header__box').toggleClass('active');
});


$(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: "$"
  });

  $('.icon-th-list').on('click', function(){
    $('.product__item').addClass('list');
    $('.icon-th-list').addClass('active');
    $('.icon-th-large').removeClass('active');
  });
  $('.icon-th-large').on('click', function(){
    $('.product__item').removeClass('list');
    $('.icon-th-large').addClass('active');
    $('.icon-th-list').removeClass('active');
  });


  
    
// Обязательно Должен быть самом конце кода. 
//иначе всё, что после него не будет работать, 
//если не найдёт себя в доме 
var mixer = mixitup('.products__inner-box');

});

