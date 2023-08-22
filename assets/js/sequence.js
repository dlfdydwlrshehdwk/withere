$(()=>{




    




    function blackText(target){

      // 기능 : 파라미터를 받음 - 그 요소안에 .txt들(3개있을것) 걔네를 한번씩 번쩍해줌!

      // 타겟 = $( 파라미터 + '.txt' )
      let tg = $( target + '.txt');

      // 초기화셋팅
      tg.parent().css({display : 'flex'})
      .siblings().css({display : 'none'})

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
            .animate({ color : '#f3f3f3'},0)
          })
        })
    }

    function sq(startN,endN,duration){

      // 이미지 시작값, 이미지 끝나는값, 재생시간(0.3으로 나오게 하는게 베스트)

      // 이미지 재생을 체크해줄 변수 
      let i = startN

      // 사진 출력할곳 보이게하기
      $('.testimg').css({display : 'block'})

      // 사진담을 배열만들기
      // 빈배열을 만든 후 for문을 돌려 파라미터로 받은 시작값과 끝값을 각각 넣어준다.
      let array = []
      for(let i = startN ; i < endN ; i++){
          array.push("../assets/images/sequence/sequence_" + i + ".jpg")
      }
    
      let time =  duration / (endN - startN) // 대략 28.5 이미지가 바뀌어야 할 주기
      
      // setInterval 을 이용한 일정시간마다 반복
      let interval = setInterval(imgSequence,time) 

      // 이미지 시퀀스 돌려줄 함수
      function imgSequence(){

        // 이미지 넣는곳 + 이미지 경로
        $('.testimg').attr('src','../assets/images/sequence/sequence_' + i + '.jpg');
  
        if(i > endN){
          // 영상이 다 재생되고나서 실행할 코드 - 영상재생공간을 없앰
          $('.testimg').css({display : 'none'})
          clearInterval(interval)
          console.log('끝')
          return;
        };
        
        // i를 증가시켜서 영상처럼 보이게함 
        i++
      }

    }

    
    
    // 최종결과
    function gogo(){
      blackText('.t1 ')
      setTimeout(()=>{
        sq(1,175,5000)
      },3500)
      setTimeout(()=>{
        blackText('.t2 ')
      },8500)
      setTimeout(()=>{
        sq(176,350,5000)
      },12000)
      setTimeout(()=>{
        blackText('.t3 ')
      },17000)
      setTimeout(()=>{
        sq(351,525,5000)
      },20500)
    }
    // 최초실행 + 실행코드
    gogo()
    // 반복실행하려면 이거 주석풀기
    let interval = setInterval(gogo,25500)
    // 자동재생 멈추고 싶다면
    // let clear = clearInterval(interval)


    /////////////////////////////////////////////////////////////////////
    ////////////////////////// 안쓰는 코드  //////////////////////////////
    /////////////////////////////////////////////////////////////////////

    // 시퀀스 스크롤매직인데 이해가안돼서 잠시 유기

    // 시퀀스 1-175 176-350 351-526 
    // 변수값은 시작사진숫자, 끝나는사진숫자, 몇초동안할건지숫자 
    function sequence(startN,endN,duration){
      $('.img-set').css({display : 'block'})
      setTimeout(()=>{
          $('.img-set').hide()
      },5000)
      let a = startN;
      let b = endN;
      let c = duration;
      console.log(a,b,c)
      // 스크롤매직 시퀀스
  
      // define images 이미지정의
      let array = []
      for(let i = a ; i < b ; i++){
          array.push("../assets/images/sequence/sequence_" + i + ".jpg")
      }

      let images = array
      // console.log(array) // i갯수만큼 배열안에 저장
  
        // TweenMax can tween any property of any object. We use this object to cycle through the array
        // TweenMax는 모든 객체의 속성을 구분할 수 있습니다. 이 객체를 사용하여 배열을 순환합니다
        var obj = {curImg: 0};
  
        // create tween 사이를 만들다
        var tween = TweenMax.to(obj, c,
          // 몇초동안 - 5
          {
            curImg: images.length - 1,	// animate propery curImg to number of images 애니메이트 속성 curImg 이미지 수로 이동
            roundProps: "curImg",				// only integers so it can be used as an array index 배열 인덱스로 사용할 수 있도록 정수만 사용합니다
            repeat: 0,									// repeat 3 times 세 번 반복하다
            immediateRender: false,			// load first image automatically 첫 번째 이미지 자동 로드
            ease: Linear.easeNone,			// show every image the same ammount of time 모든 이미지에 동일한 시간을 보여줍니다
            onUpdate: function () {
              $(".testimg").attr("src", images[obj.curImg]); // set the image source 이미지 어디에다가 꽂을건지 + 무슨거를 바꿀건지 ( src속성 )
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
      }
})
