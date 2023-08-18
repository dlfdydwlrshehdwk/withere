let ani = {
  init: function () {
  }


};

$(function () {
 
    ani.init();

    // 네비게이션 초기에 안보이게 선셋팅
    $('.sub-menu').css({
      // css로 셋팅했음
      // overflow : 'hidden',
      // height : '0'
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

      // intro 텍스트 칼라 이벤트 함수
      function blackText( target ){
        // target 은 t1 t2 t3를 노림
        // 안에있는 txt 3가지에게 순차적으로 효과를 줌
        let tg = $( target + '.txt');
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
      blackText('.t1 ')


      // 스크롤매직 시퀀스

      // define images 이미지정의
      let array = []
      for(let i = 0 ; i < 175 ; i++){
          array.push("./MPimg/sequence/sequence_" + i + ".jpg")
      }
      var images = array

      // TweenMax can tween any property of any object. We use this object to cycle through the array
        // TweenMax는 모든 객체의 속성을 구분할 수 있습니다. 이 객체를 사용하여 배열을 순환합니다
      var obj = {curImg: 0};

	// create tween 사이를 만들다
	var tween = TweenMax.to(obj, 5,
    // 몇초동안 - 5
    {
			curImg: images.length - 1,	// animate propery curImg to number of images 애니메이트 속성 curImg 이미지 수로 이동
			roundProps: "curImg",				// only integers so it can be used as an array index 배열 인덱스로 사용할 수 있도록 정수만 사용합니다
			repeat: 2,									// repeat 3 times 세 번 반복하다
			immediateRender: true,			// load first image automatically 첫 번째 이미지 자동 로드
			ease: Linear.easeNone,			// show every image the same ammount of time 모든 이미지에 동일한 시간을 보여줍니다
			onUpdate: function () {
			  $("#myimg").attr("src", images[obj.curImg]); // set the image source 이미지 소스를 설정하다
			}
		}
	);

	// init controller init 컨트롤러
	var controller = new ScrollMagic.Controller();

	// build scene 장면을 만들다
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger",duration: 0})
					.setTween(tween)
					.addIndicators({name : '1'}) // add indicators (requires plugin) 지시자 추가(인디케이터 플러그인)
					.addTo(controller);

	// handle form change  양식 변경을 처리하다
	$("form.move input[name=duration]:radio").change(function () {
		scene.duration($(this).val());
	});



});
