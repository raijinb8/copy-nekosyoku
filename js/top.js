//1個目のSwiper
var mySwiper1 = new Swiper('.swiper1', {
  speed: 1000,
  loop: true,
	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	}
});

//2個目のSwiper
var mySwiper2 = new Swiper('.swiper2', {
  direction: 'vertical',
  effect: 'slide',
  speed: 1000,
  loop: true,
	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	}
});

/* 一覧ホバー設定
	-----------------------------------------------------------------*/
	// $('.fade').hover(function() {
	// 	$(this).fadeTo("fast",0.8);
	// }, function() {
	// 	$(this).fadeTo("fast",1.0);
	// });

	/* Gナビ設定
	-----------------------------------------------------------------*/
	$('.menu').on('click',function(){
		$('.menu__line').toggleClass('active');
		$('#gnav').fadeToggle();
	});
	