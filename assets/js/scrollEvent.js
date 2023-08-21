let scroll = {
    init: function () {
    }
  
  
  };
$(()=>{

  // 새로고침시 맨위로
  setTimeout(()=>{
    $(window).scrollTop(0)
  },10)
  

// news 스크롤이벤트

      // 필요변수
      let targetPage = $('.news'); // 타겟박스
      let moveBx = $('.news-slide ul') // 실제로 움직일 박스
      let  last_scrollTop = 0; // 마우스의 방향(위,아래)를 알 수 있는 변수
      
      $(window).on('scroll',function(){
        let windowH = $(window).scrollTop()
        let point = targetPage.offset().top // DOM에서 요소간의 거리 4446
        let targetP = windowH - point // js에서 getBoundingClientRect() 느낌
        // console.log('스크롤값',windowH,'\n포인트값',point,'사용할숫자\n',targetP)
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


        // 스크롤이 맨위일시만 헤더가 보이고 
        // 평소에는 보이지 않으며 마우스휠을 올릴경우 헤더가 보이게!
        console.log(windowH)
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






      });

      // new 스크롤이벤트 끝

})