let ani = {
  init: function () {
  }


};

$(function () {
 
    ani.init();

    // 네비게이션 초기에 안보이게 선셋팅
    $('.sub-menu').css({
      overflow : 'hidden',
      height : '0'
    })
    // 네비게이션 오버시 
    $('.nav').hover(
    function(){
      $('.sub-menu').css({
        height : 'auto'
      })
      $('.headerwrap').css({height : '272px',
      backgroundColor : 'beige' })
    },
    // 네비게이션 오버 뗐을때
    function(){
      $('.sub-menu').css({
        overflow:'hidden',
        height : '0'
      })
      $('.headerwrap').css({height : '100px',
      backgroundColor : 'white' })
    })

    // product부분 초기에 안보이게 셋팅
    $('.product-bottombx').hide()
    $('.product-sc').hover(
      // 오버시
      function(){
        console.log('h')
        $(this).find('.product-bottombx').stop().slideDown()
      },
      // 아웃시
      function(){
        $(this).find('.product-bottombx').stop().slideUp()
      })


      // news 스크롤이벤트

      // 필요변수
      let targetPage = $('.news'); // 타겟박스
      let stickyBx = $('.news-slide') // 스티키 될 박스
      let moveBx = $('.news-slide ul') // 실제로 움직일 박스

      $(window).scroll(function(){
        // 되나 체크
        console.log('scr')
        // let a = moveBx.getBoundingClientRect().top;
        // console.log(a)

      })
      

});
