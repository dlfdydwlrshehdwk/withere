let ani = {
  init: function () {
  }


};

$(function () {
 
    ani.init();

    $('.sub-menu').css({
      overflow : 'hidden',
      height : '0'
    })

    $('.nav').hover(
    function(){
      $('.sub-menu').css({
        height : 'auto'
      })
      $('.headerwrap').css({height : '272px',
      backgroundColor : 'white' })
    },
    function(){
      $('.sub-menu').css({
        overflow:'hidden',
        height : '0'
      })
      $('.headerwrap').css({height : '100px',
      backgroundColor : 'white' })
    })
});
