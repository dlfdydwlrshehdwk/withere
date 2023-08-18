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
      backgroundColor : '' })
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
      let moveBx = $('.news-slide ul') // 실제로 움직일 박스
      
      $(window).on('scroll',function(){
        let windowH = $(window).scrollTop()
        let point = targetPage.offset().top // DOM에서 요소간의 거리 4446
        let targetP = windowH - point // js에서 getBoundingClientRect() 느낌
        console.log('스크롤값',windowH,'\n포인트값',point,'사용할숫자\n',targetP)
        let a = $('.news-content').height()
        // 가로스크롤처럼 보일 적용구간 
        if(targetP >= 0 && targetP <= 3480 - a ){
          // 적용구간에 들어오면 스크롤되는 만큼 박스이동
          moveBx.css({left :'-' + targetP + 'px'})
        }
        // 타겟값이 아니라면(화면의 위쪽이라면) 박스는 원위치유지상태
        else if(targetP < 0){
          moveBx.css({left : '0'});
        }
      })

      // new 스크롤이벤트 끝

      // intro 텍스트 칼라 이벤트
      function blackText(){
        let tg = $('.t1 .txt');
        tg.eq(0)
        .delay(500)
        .animate({ color : 'black' },0)
        .delay(500)
        .animate({ color : '#f3f3f3' },0,()=>{
          tg.eq(1)
          .delay(500)
          .animate({ color : 'black' },0)
          .delay(500)
          .animate({ color : '#f3f3f3' },0,()=>{
            tg.eq(2)
            .delay(500)
            .animate({ color : 'black'},0)
            .delay(500)
            .animate({ color : '#f3f3f3'},0,()=>{
              tg.delay(500).animate({color : 'blue'},0)
            })
          })
        })

      }
      blackText()

});
