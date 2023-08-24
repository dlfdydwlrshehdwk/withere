let scroll = {
    init: function () {
    }
  
  
  };
$(()=>{
  // 새로고침시 맨위로
  setTimeout(()=>{
    $(window).scrollTop(0)
  },100)

      // news 스크롤이벤트

      // 필요변수
      let  last_scrollTop = 0; // 마우스의 방향(위,아래)를 알 수 있는 변수
      
      $(window).on('scroll',function(){
        // 윈도우의 스크롤값
        let windowH = $(window).scrollTop()

        // 스크롤이 맨위일시만 헤더가 보이고 
        // 평소에는 보이지 않으며 마우스휠을 올릴경우 헤더가 보이게!
        
        if(windowH !== 0){
          // 실행지점 = window.scrollTop() 이 0 이 아닐경우
          if (windowH > last_scrollTop) {
            // 마우스휠을 아래로 했을때 코드작성
            $('#header').css({
              transition : 'top .4s',
              top : '-100px'
            })
            $('.headerwrap').css({
              transition : 'top .4s,background 0s 0.4s',
              top : '-100px',
              backgroundColor : 'transparent'
            })
          } 
          else {
              // 마우스휠을 위로 했을때 코드작성
              $('#header').css({
                transition : 'top .4s',
                top : '0'
              })
              $('.headerwrap').css({
                transition : 'top .4s',
                top : '0',
                backgroundColor : 'white'
              })
          }
          last_scrollTop = windowH; // 마지막 스크롤위치값을 저장 후 스크롤시 이 값과 비교하여 위아래를 계산
        }
        else if ( windowH == 0 ) {
          $('.headerwrap').css({
            backgroundColor : 'transparent'
          })
        }

        // 스크롤이 footer위에까지 올쯔음에 footer 위로가게 설정
        // 이벤트대상 
        let scrolltopbtn = $('.scrolltop')
        // 전체 높이값
        let wrapH = $('#wrap').height() // 8562 // windowH는 7279임 100vh만큼 빠지기때문 기준을 화면맨위로잡기에
        // 대상높이값
        let footerH = $('.footer').innerHeight() 
        // 목표값
        let target_scrolltop = wrapH - footerH - $(window).height()

        // 윈도우스크롤의 위치가 타겟보다 크다면 코드
        if(windowH > target_scrolltop){
          scrolltopbtn.css({
            transition : '.3s',
            bottom : footerH  + 30 + 'px'
          })
        }
        else{
          $('.scrolltop').css({
            transition : '.3s',
            bottom : '5%'
          })
        }


        // console.log($(window).height()) // 1273 보이는폭
        // 위로가는버튼 보이는폭만큼 지나가야 보이게 하기
        if(windowH > $(window).height()){
          $('.scrolltop').css({display : 'flex'})
          scrolltopon()
        }
        else { 
          scrolltopoff()
          $('.scrolltop').css({display : 'none'})
          
        }
        function scrolltopon(){
          $('.scrolltop').stop().animate({opacity : 1},100)
        }
        function scrolltopoff(){
          $('.scrolltop').stop().animate({opacity : 0},100)
        }
      });

      

      // new 스크롤이벤트 끝
      
})