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

  // start tabs
  $('.product-one__tabs .tab, settings__tabs .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.product-one__tabs, settings__tabs').find('.tab-item').removeClass('active-tab').hide();
      $('.product-one__tabs .tabs, settings__tabs .tab').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
    });
  // end tabs
  // стилизация чекбоксов плагином jquery-form-styler
  $('input[type="file"], select').styler();



  
    
// Обязательно Должен быть самом конце кода. 
//иначе всё, что после него не будет работать, 
//если не найдёт себя в доме 
var mixer = mixitup('.products__inner-box');

});

