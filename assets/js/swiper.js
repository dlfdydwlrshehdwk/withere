let swiper = {

	init:function(){

    $('.swiper').each(function(idx,ele){
      const swiper = new Swiper(ele,{
        slidesPerView : 'auto',
        slideToClickedSlide : true,
        grabCursor : true
      })
    })
	},
}

$(function () {
	swiper.init();
	
});