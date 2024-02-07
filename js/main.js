$(document).ready(function() {
    "use strict";

    $(".faq_block_list_item_head").click(function() {
        $(this).find(".faq_block_list_item_head_btn").toggleClass("active");
        $(this).parent().find(".faq_block_list_item_body").slideToggle();
    });

    $('.heading_mob_sidebar_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      speed: 500,
      pauseOnHover: false,
      fade: true,
      arrows: false
	  });

    $('.heading_mob_main_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      speed: 500,
      pauseOnHover: false,
      fade: true,
      arrows: true,
      prevArrow: $('.heading_mob_main_prev'),
      nextArrow: $('.heading_mob_main_next')
	  });

    if ($(window).width() < 1023) {
      $('.result_block_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        speed: 500,
        pauseOnHover: false,
        fade: false,
        arrows: true,
        prevArrow: $('.result_block_prev'),
        nextArrow: $('.result_block_next'),
        responsive: [
          {
            breakpoint: 480,
            settings: {
              fade: true,
              slidesToShow: 1
            }
          }
        ]
      });
    }

    $('.forums_block_sidebar_mob_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      speed: 500,
      pauseOnHover: false,
      fade: true,
      arrows: false
	  });    

});