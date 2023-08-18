$(()=>{
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


        // intro 텍스트 칼라 이벤트 함수
      function blackText( target,a,b,c ){
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
              tg.delay(500).animate({color : '#f3f3f3'},0,function(){
                    sequence(a,b,c)
              })
            })
          })
        })
      };

    // 실행코드
    //   blackText('.t1 ')

    //   handle form change  양식 변경을 처리하다 - 이벤트 핸들러 뭐할때 시작할거니?
    $('.gogo').on('click',function () {
    sequence(0,175,5)
    });

    // $('.t2').css({display : 'flex'})
    function interval(){
        blackText('.t1 ',0,175,5)
        // 3.5초뒤에 애니가 실행 5초
        // blackText('.t2 ',176,351,5)
        // 처음엔 이미지소스가 없으니 .img-set dn상태
        // blackText 1 실행하고 8.5초 뒤에 .img-set 숨김 + t1숨김 t2보이게하고 blackText t2실행
        setTimeout(()=>{
            $('.t1').hide()
            $('.t2').css({display : 'flex'})
            blackText('.t2 ',176,351,5)
        },8500)

    }
    interval()

})
