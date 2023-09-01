let swiper = {

	init:function(){
		console.log('h')
  const swiper = new Swiper('#faq_list-container .swiper', {
    slidesPerView : 'auto',
    spaceBetween : 30,
  });
	},
}

$(function () {
	swiper.init();
	
});