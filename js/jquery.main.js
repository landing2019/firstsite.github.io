$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $('.menu-nav').toggleClass('menu-nav_active');
  $('.item').toggleClass('item_active');
});

$('[data-fancybox="gallery"]').fancybox({
	// Options will go here
});

$(function(){

  'use strict';

  $('a[href^="#"]').click(function(){
    let target = $(this).attr('href');
    $('html, body').animate(
      {
        scrollTop:$(target).offset().top
      },
      800
    );
  });
});
