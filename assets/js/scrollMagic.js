$(()=>{

    let wH = $(window).height()

    // 스크롤매직을 이용한 이미지 시퀀스
    function sq(trele,start,end,next){
    // 트리거요소, 핀요소, 시작사진수,끝사진수

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
            $('.bg-section').css({display : 'none'});
            $(window).scrollTop(next.offset().top - 50)
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
    // .addIndicators({
    //     name : 'ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ'
    // }); // trigger위치 표시
    
    }


    // sq("#trigger1","#pin1",1,176,$('.sqimg1'))
    // sq(트리거요소,핀요소,시작숫자,끝숫자,사진출력할타겟요소)


    /* 
        이름 : silhum
        기능 : .bg-section 을 db시켜준다.
        트리거 시작점 : '.txtwrap2'

    */
    function silhum(trigger,startN,endN,next){
        // 트리거 - 각 화면멈처구간에서 트리거훅 1줘서 맨밑에서실행
        // onStart로 사진 넣는공간 dib 
        // onComplete 로 끝날때 dn
        let controller2 = new ScrollMagic.Controller();
        
            let tween_on = TweenMax.to('.bg-section',0.1,{
                display : 'block',
                // duration : '100%',
                // onStart : $('.bg-section').css({opacity : .5}),
                onComplete : sq(trigger,startN,endN,next)
            });
        
            let scene = new ScrollMagic.Scene({
                triggerElement : trigger,
                duration : '100%',
                offset : wH,
                triggerHook : 0
            })
            .setTween(tween_on)
            .addTo(controller2)
            // .addIndicators({
            //     name : '제발'
            // })
    }




    silhum(".txtwrap1",1,176,$('.txtwrap2'))
    silhum(".txtwrap2",176,351,$('.txtwrap3'))
    silhum(".txtwrap3",351,526,$('.startbanner'))
    // silhum(트리거요소,시작수,끝수,다음스크롤위치)



































    // 텍스트부분 // 

    function fixbx(target){ // 박스멈춰!
        let controller = new ScrollMagic.Controller();
        let tween = TweenMax.to(target, .001, { // 요소, 애니시간, 속성
            onComplete : ()=>{
                $(".txt").removeClass('on');
                }
        });
        let scene = new ScrollMagic.Scene({
            triggerElement: target,
            duration:'200%',// 스크롤 길이 조정 - 요소위치가 기준 - 소수점안됨
            triggerHook : 0 // 뷰포트기준 트리거위치 소수점됨
        })
        .setTween(tween)
        .addTo(controller)
        .setPin(target) // 핀플로워안쓰는게낫다
        // .addIndicators(
        //     {name : '박스멈춰!'}
        // );
    }
    fixbx('.t1')
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

        // 여기가 1차조건 = 박스멈춰! 가 되는 구역
        if(b == 0){

            // 여기가 시작후 첫글씨색바뀌어야 되는부분
            if(e > 0 && e < c / 3 * 1){
               target.find('.txt1').siblings().removeClass('on')
               target.find('.txt1').addClass('on')
            }
            // 첫글씨가 회색이되면서 두번째 글씨가 바뀌어야 하는부분
            else if(e > c / 3 * 1 && e < c / 3 * 2){
                target.find('.txt2').siblings().removeClass('on')
                target.find('.txt2').addClass('on')
            }
            // 첫글씨가 회색이되면서 두번째 글씨가 바뀌어야 하는부분
            else if (e > c / 3 * 2 && e !== 0){
                target.find('.txt3').siblings().removeClass('on')
                target.find('.txt3').addClass('on')
            }
            // 마지막글씨부분 100vh넘어가면 회색되기 - 글씨 한번씩 다 번쩎고나서 회색되게하기
            if ( e > c ){
                target.find('.txt').removeClass('on')
            }
            // 박스멈추는게 끝나면 글씨 회색
            if( e == 0 ){
                target.find('.txt3').find('.txt').removeClass('on')
            }
            // 글씨가 위로갈때 초기화
            if(deop.offset().top >= wH){
                target.find('.txt').removeClass('on')
            }
        }
        // 이벤트가 아닐때는 기본글씨색 회색
        else {
            target.find('.txt3').find('.txt').removeClass('on')
            
        }
    }


    // 실행코드
    chgColor($('.t1'),$('.txtwrap1'))
    chgColor($('.t2'),$('.txtwrap2'))
    chgColor($('.t3'),$('.txtwrap3'))
})
})


// 스크롤시 박스가 고정되며 텍스트의 색이 순서대로 바뀌고 스크롤에 맞게 이미지가 시퀀스 된 후 
// 다음 요소까지 스크롤되게만듬

// 정리할겸 순서정리

// 1. 먼저 최상단 박스를 고정시켰음 - 이때 duration 을 200%로 주었음 화면의 200% 중요!
// 2. 제이쿼리 스크롤이벤트로 현재스크롤의 위치가 박스크기의 시작, 1/3, 2/3 에 등 조건을 알아내어
// 맞게 글씨 색을 바뀌게함
// 3. 함수를 두개만들었음 
// 3-1. 하나는 이미지를 타겟에 스크롤에 따라서 이미지를 넣어주는... 업데이트시 - 이미지넣음 끝났을시 이미지박스삭제
// 3-2. 하나는 트리거에 맞으면 이미지박스를 보여주고 이미지보여주는 함수를 실행하는 함수
// 여기서 중요 offset을 윈도우 세로값만큼주어 텍스트가 먼저바뀌고 시퀀스가 실행되는것 처럼보이게 하였음