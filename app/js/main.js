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


  
    
// Обязательно Должен быть самом конце кода. 
//иначе всё, что после него не будет работать, 
//если не найдёт себя в доме 
var mixer = mixitup('.products__inner-box');

});

