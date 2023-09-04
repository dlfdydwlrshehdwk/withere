let swiper = {

	init:function(){
  const swiper_faqList = new Swiper('#faq_list-container .swiper', {
    slidesPerView : 'auto',
    // 반응형 하고싶다면...
    // breakpointsInverse : true,
    // breakpoints : {
    //   767 : {
    //     slidesPerView : 3
    //   }
    // }
  });
  const swiper_noticeList = new Swiper('#notice_list-container .swiper', {
    slidesPerView : 'auto',
  });
  const swiper_news = new Swiper('#news-container .swiper', {
    slidesPerView : 'auto',
  });
  const swiper_dataList = new Swiper('#data_list-container .swiper', {
    slidesPerView : 'auto',
  });
	},
}

$(function () {
	swiper.init();
	
});