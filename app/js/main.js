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
// new-items.html
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
   $('input[type="file"]').styler();
   // отключаем влияние на селекты
   $('select').styler('destroy'); 



  // стилизация select плагином Chosen v1.8.7
  $(".my_select_box").chosen({
    width: "100%",
  disable_search: false,
  disable_search_threshold: 5,
  enable_split_word_search: false,
  max_selected_options: 10,
  no_results_text: "Ничего не найдено",
  placeholder_text_multiple: "Выберите несколько параметров",
  placeholder_text_single: "Выберите параметр",
  search_contains: true,
  display_disabled_options: false,
  display_selected_options: false,
  max_shown_results: Infinity
  });
  



  
    
// Обязательно Должен быть самом конце кода. 
//иначе всё, что после него не будет работать, 
//если не найдёт себя в доме 
var mixer = mixitup('.products__inner-box');

});

