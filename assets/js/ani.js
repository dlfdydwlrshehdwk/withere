let ani = {
  init: function () {
  }


};

$(function () {
    ani.init();

    // 네비게이션 오버시 
    $('.nav').hover(
    function(){
      console.log('hh')
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
      backgroundColor : '' })
    });

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
      });

      


      

      $('.gogo').on('click',function(){
        console.log('클릭')
        // $(this).append(`<img class="testimg" src="../assets/images/sequence/sequence_2.jpg" />`)
      })

});
