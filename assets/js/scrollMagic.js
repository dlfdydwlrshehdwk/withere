$(()=>{
    console.log('하는중')
    let wH = $(window).height()
    console.log(wH)

    // 스크롤매직을 이용한 이미지 시퀀스
    function sq(trele,start,end){
    // 트리거요소, 핀요소, 시작사진수,끝사진수
    console.log('되는주웅~')
    // 1. 빈배열을 만들어서 배열안에 이미지 소스들을 넣어줌 for문활용했음
    let image = [] 
    // TweenMax는 모든 객체의 속성을 구분할 수 있다. 이 객체를 사용하여 배열을 순환한다
    let obj = { curimg : 0 }
    for ( let i = start; i < end ; i++ ){
        image.push(`../assets/images/sequence/sequence_${i}.jpg`)
    }

    // 2. 컨트롤러 생성 - 왜하는지모름
    let controller = new ScrollMagic.Controller();
    
    // 3. 애니메이션 오브젝트생성
    let tween = TweenMax.to(obj,0.3,{ // 트윈맥스.to( 요소, 시간 ,{ 속성들 }) 근데 여기선 시간 안먹는듯? 다똑같음 스크롤이라그런가
        curimg : image.length - 1, // 애니메이트 속성 curImg 이미지 수로 이동 1 - 175
        roundProps : "curimg", // 배열 인덱스로 사용할 수 있도록 정수만 사용한다는데 뭔지모름
        repeat :0, // 반복할건지 ? 안할거라 0 할거면 숫자 
        
        immediateRender : false, // 첫번째 이미지 자동 로드할건지?
        ease: Linear.easeNone, // 이징 : 일정하게
        // offset : wH, // 트리거에서 150px밑에서 실행 애니메이션 지연 느낌 
        // duration : 200, // pin이용할거면 duration 지정 근데 잘안되는걸로봐서 scene에서 정하는거같음
        onUpdate : function(){ // 이미지 경로를 업데이트해주나봄 첨봄
            $('.testimg').attr('src',image[obj.curimg])
        },
        onComplete : ()=>{
            $('.bg-section').css({display : 'none'})
            console.log('끝남')
        }
    })
    
    // 4. Scene object 생성 - 짜놓은 애니메이션을 실행하기위한 셋팅
    let scene = new ScrollMagic.Scene({
        triggerElement : trele, // 트리거 요소명 - 이벤트시작지점
        duration : '100%', // 이벤트 끝나는지점 설정 단순숫자 300 -> 300px아래 지점, %단위 '50%' 요소의 50%지점
        triggerHook: 0 ,// 트리거 위치 조정 0 맨위 기본값 화면중앙 
        offset : wH,
    })
    .setTween(tween) // 애니메이션 오브젝트 tween을 장착
    // .setPin(pinele , {pushFollowers : false}) 
    // 요소 고정가능하다고함 특정지점이후로는 따라오지않게 하려면 속성에서 duration지정
    // pushFollowers : false 하면 핀-스페이서 안생긴다고함
    .addTo(controller) // 컨트롤러 장착 - 무슨역할인지모름
    .addIndicators({
        name : 'ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ'
    }); // trigger위치 표시
    
    }


    // sq("#trigger1","#pin1",1,176,$('.sqimg1'))
    // sq(트리거요소,핀요소,시작숫자,끝숫자,사진출력할타겟요소)


    // 온업데이트 넣어서 이거 실행 ㄱㄱ 해보자


    /* 
        이름 : silhum
        기능 : .bg-section 을 db시켜준다.
        트리거 시작점 : '.txtwrap2'

    */
    function silhum(){
        // 트리거 - 각 화면멈처구간에서 트리거훅 1줘서 맨밑에서실행
        // onStart로 사진 넣는공간 dib 
        // onComplete 로 끝날때 dn
        let controller2 = new ScrollMagic.Controller();
        
            let tween_on = TweenMax.to('.bg-section',0.1,{
                display : 'block',
                // duration : '100%',
                // onStart : $('.bg-section').css({opacity : .5}),
                onComplete : sq(".txtwrap2",1,176,$('.testimg'))
            });
        
            let scene = new ScrollMagic.Scene({
                triggerElement : ".txtwrap2",
                duration : '100%',
                offset : wH,
                triggerHook : 0
            })
            .setTween(tween_on)
            .addTo(controller2)
            .addIndicators({
                name : '제발'
            })
    }




    silhum()
    // silhum(트리거요소,시작수,끝수,)



































    // 텍스트부분 // 

    function fixbx(target){ // 박스멈춰!
        let controller = new ScrollMagic.Controller();
        let tween = TweenMax.to(target, .001, { // 요소, 애니시간, 속성
            onStart : ()=>{console.log('박스멈춰!')},
            onComplete : ()=>{$(".txt").removeClass('on')},
            // onComplete : ()=>{zebal()}
        });
        let scene = new ScrollMagic.Scene({
            triggerElement: target,
            duration:'200%',// 스크롤 길이 조정 - 요소위치가 기준 - 소수점안됨
            triggerHook : 0 // 뷰포트기준 트리거위치 소수점됨
        })
        .setTween(tween)
        .addTo(controller)
        .setPin(target) // 핀플로워안쓰는게낫다
        .addIndicators(
            {name : '박스멈춰!'}
        );
    }
    fixbx('.t1') // 박스가 멈추면 스크롤이 안내려감 
    fixbx('.t2')
    fixbx('.t3')

    // 나의시도
$(window).scroll(function(){
    // 윈도우 스크롤값
    let wH = $(window).scrollTop()

    // 야매코드 - 이거 나중에 고쳐야 하나? 그럴듯
    if(wH == 0) $('.txt').removeClass('on')

    function chgColor (target, deop) {
        // dom에서 윗대가리값 일방적으로 7698 끝나면 8981
        let a = target.offset().top // 타겟요소의 DOM에서부터의 거리
        let b = wH - a // 현재스크롤값 에서 a를 뺀 값
        let c = target.height() // 타겟요소의 본연의 높이값
        let d = deop.offset().top // 타겟요소를 덮고있는 요소의 DOM에서의 거리
        let e = a - d; // 글씨 바뀌는 기준이 될 변수
        // console.log(wH,a,b,c,d,e)
        // console.log(deop.offset().top,wH)
        if(b == 0){
            // 여기가 1차조건 = 박스멈춰! 가 되는 구역

            if(e > 0 && e < c / 3 * 1){
                // 여기가 시작후 첫글씨색바뀌어야 되는부분
                // console.log('첫글씨바낌')
               target.find('.txt1').siblings().removeClass('on')
               target.find('.txt1').addClass('on')
            }
            else if(e > c / 3 * 1 && e < c / 3 * 2){
                // 첫글씨가 회색이되면서 두번째 글씨가 바뀌어야 하는부분
                // console.log('두번째글씨바낌')
                target.find('.txt2').siblings().removeClass('on')
                target.find('.txt2').addClass('on')
            }
            else if (e > c / 3 * 2 && e !== 0){
                // 첫글씨가 회색이되면서 두번째 글씨가 바뀌어야 하는부분
                // console.log('세번째글씨바낌')
                target.find('.txt3').siblings().removeClass('on')
                target.find('.txt3').addClass('on')
            }
            else if (e > c / 3 * 2 && e !== 0){
                // 첫글씨가 회색이되면서 두번째 글씨가 바뀌어야 하는부분
                // console.log('세번째글씨바낌')
                target.find('.txt3').siblings().removeClass('on')
                target.find('.txt3').addClass('on')
            }
            // 마지막글씨부분 100vh넘어가면 회색되기
            if ( e > c ){
                target.find('.txt').removeClass('on')
            }

            if( e == 0 ){
                target.find('.txt3').find('.txt').removeClass('on')
            }
            // 글씨가 위로갈때 초기화
            if(deop.offset().top >= wH){
                target.find('.txt').removeClass('on')
            }
        }
        else {
            target.find('.txt3').find('.txt').removeClass('on')
            
        }
    }



    chgColor($('.t1'),$('.txtwrap1'))
    chgColor($('.t2'),$('.txtwrap2'))
    chgColor($('.t3'),$('.txtwrap3'))
})
})