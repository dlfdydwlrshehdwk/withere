let scrollMagic = {
    init : function(){
        let wH = $(window).height()
        
    function sq(trele,start,end,next){
    // sq(트리거요소, 핀요소, 시작사진수,끝사진수)
    let image = [] 
    let obj = { curimg : 0 }
    for ( let i = start; i < end ; i++ ){
        image.push(`../assets/images/sequence/sequence_${i}.jpg`)
    }
    // 2. 컨트롤러 생성 
    let controller = new ScrollMagic.Controller();
    
    // 3. 애니메이션 오브젝트생성
    let tween = TweenMax.to(obj,0.3,{ // 트윈맥스.to( 요소, 시간 ,{ 속성들 })
        curimg : image.length - 1, // 애니메이트 속성 curImg 이미지 수로 이동 1 - 175
        roundProps : "curimg", // 배열 인덱스로 사용할 수 있도록 정수만 사용
        repeat :0, // 반복할건지 ? 안할거라 0 할거면 숫자 
        
        immediateRender : false, // 첫번째 이미지 자동 로드할건지?
        ease: Linear.easeNone, // 이징 : 일정하게
        onUpdate : function(){ // 이미지 경로를 업데이트해줌
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
    .setTween(tween)
    .addTo(controller)
    }
    // sq("#trigger1","#pin1",1,176,$('.sqimg1'))
    // sq(트리거요소,핀요소,시작숫자,끝숫자,사진출력할타겟요소)
    function silhum(trigger,startN,endN,next){
        let controller2 = new ScrollMagic.Controller();
            let tween_on = TweenMax.to('.bg-section',0.1,{
                display : 'block',
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
    }
    silhum(".txtwrap1",1,176,$('.txtwrap2'))
    silhum(".txtwrap2",176,351,$('.txtwrap3'))
    silhum(".txtwrap3",351,526,$('.startbanner'))
    // silhum(트리거요소,시작수,끝수,다음스크롤위치)

    // 텍스트부분 // 
    function fixbx(target){
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
        .setPin(target)
    }
    fixbx('.t1')
    fixbx('.t2')
    fixbx('.t3')
    // 나의시도
$(window).scroll(function(){
    let wH = $(window).scrollTop()
    if(wH == 0) $('.txt').removeClass('on')
    function chgColor (target, deop) {
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
            // 마지막글씨부분 100vh넘어가면 회색되기 - 글씨 한번씩 다 번쩎하고나서 회색되게하기
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
    }
}

$(()=>{
    scrollMagic.init();
})