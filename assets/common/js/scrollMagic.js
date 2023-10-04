let scrollMagic = {
    init : function(){
			console.log(11)

    scrollMagic.sqOn(".txtwrap1",1,176,$('.txtwrap2'))
    scrollMagic.sqOn(".txtwrap2",176,351,$('.txtwrap3'))
    scrollMagic.sqOn(".txtwrap3",351,526,$('.startbanner'))

    scrollMagic.fixbx('.t1')
    scrollMagic.fixbx('.t2')
    scrollMagic.fixbx('.t3')

    $(window).scroll(function(){
        let wH = $(window).scrollTop()
        if(wH == 0) $('.txt').removeClass('on')
        scrollMagic.chgColor($('.t1'),$('.txtwrap1'),wH)
        scrollMagic.chgColor($('.t2'),$('.txtwrap2'),wH)
        scrollMagic.chgColor($('.t3'),$('.txtwrap3'),wH)
    })

    },
    sq : function(trele,start,end,next){
        let wH = $(window).height()
        let image = [] 
        let obj = { curimg : 0 }
        for ( let i = start; i < end ; i++ ){
            image.push(`../common/images/sequence/sequence_${i}.jpg`)
        }
    
        let controller = new ScrollMagic.Controller();
        
        let tween = TweenMax.to(obj,0.3,{
            curimg : image.length - 1,
            roundProps : "curimg",
            repeat :0,
            immediateRender : false,
            ease: Linear.easeNone,
            onUpdate : function(){
                $('.testimg').attr('src',image[obj.curimg])
            },
            onComplete : ()=>{
                $('.bg-section').css({display : 'none'});
                $(window).scrollTop(next.offset().top - 50)
            }
        })
        let scene = new ScrollMagic.Scene({
            triggerElement : trele,
            duration : '100%',
            triggerHook: 0 , 
            offset : wH,
        })
        .setTween(tween)
        .addTo(controller)
    },
    fixbx : function(target){
        let controller = new ScrollMagic.Controller();
        let tween = TweenMax.to(target, .001, {
            onComplete : ()=>{
                $(".txt").removeClass('on');
                }
        });
        let scene = new ScrollMagic.Scene({
            triggerElement: target,
            duration:'200%',
            triggerHook : 0 
        })
        .setTween(tween)
        .addTo(controller)
        .setPin(target)
    },
    sqOn : function(trigger,startN,endN,next){
        let wH = $(window).height()
        let controller2 = new ScrollMagic.Controller();
            let tween_on = TweenMax.to('.bg-section',0.1,{
                display : 'block',
                onComplete : scrollMagic.sq(trigger,startN,endN,next)
            });
            let scene = new ScrollMagic.Scene({
                triggerElement : trigger,
                duration : '100%',
                offset : wH,
                triggerHook : 0
            })
            .setTween(tween_on)
            .addTo(controller2)
    },
    chgColor : function(target, deop, wH) {
        let a = target.offset().top
        let b = wH - a // 현재스크롤값 에서 a를 뺀 값
        let c = target.height() // 타겟요소의 본연의 높이값
        let d = deop.offset().top // 타겟요소를 덮고있는 요소의 DOM에서의 거리
        let e = a - d; // 글씨 바뀌는 기준이 될 변수

        if(b == 0){
            if(e > 0 && e < c / 3 * 1){
               target.find('.txt1').siblings().removeClass('on')
               target.find('.txt1').addClass('on')
            }
            else if(e > c / 3 * 1 && e < c / 3 * 2){
                target.find('.txt2').siblings().removeClass('on')
                target.find('.txt2').addClass('on')
            }
            else if (e > c / 3 * 2 && e !== 0){
                target.find('.txt3').siblings().removeClass('on')
                target.find('.txt3').addClass('on')
            }
            if ( e > c ){
                target.find('.txt').removeClass('on')
            }
            if( e == 0 ){
                target.find('.txt3').find('.txt').removeClass('on')
            }
            if(deop.offset().top >= wH){
                target.find('.txt').removeClass('on')
            }
        }
        else {
            target.find('.txt3').find('.txt').removeClass('on')
        }
    }
}

$(()=>{
    scrollMagic.init();
})