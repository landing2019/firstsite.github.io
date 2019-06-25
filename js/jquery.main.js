$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $('.menu-nav').toggleClass('menu-nav_active');
  $('.item').toggleClass('item_active');
});

$('[data-fancybox="gallery"]').fancybox({
	// Options will go here
});

