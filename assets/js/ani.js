let ani = {
  init: function () {
  }


};

$(function () {
 
    ani.init();

    // $('.sub-menu').hide()

    // nav의 각 서브메뉴와의 길이를 맞추기위해 
    $('.main-menu').eq(1).css({width : $('.sub-menu').eq(0).width() + 'px'})
    $('.main-menu').eq(2).css({width : $('.sub-menu').eq(1).width() + 'px'})
    $('.main-menu').eq(3).css({width : $('.sub-menu').eq(2).width() + 'px'})
    $('.main-menu').eq(4).css({width : $('.sub-menu').eq(3).width() + 'px'})
    $('.main-menu').eq(5).css({width : $('.sub-menu').eq(4).width() + 'px'})

    $('.nav').hover(
    function(){
      $('.sub-menu').stop().show()
    },
    function(){
      $('.sub-menu').stop().hide()
    })
});
