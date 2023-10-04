const test = {
  init : function(){
    this.main14()
    this.main10()
    this.main9()
    this.main13()
    this.main12()
    // this.main567()
    // this.test567()

  },
  test567 : function(){
    gsap.registerPlugin(ScrollTrigger);

    let zebal = gsap.timeline({
      ScrollTrigger : {
        trigger : ".zebal",
        start : "top top",
        end: "+=1500",
        scrub : true,
        pin : true,
        anticipatePin : 1,
        markers : {
          startColor : 'yellow',
          endColor : "blue"
        },
      }
    })
    .to('.zb-slide',{x:-1000})

    
  },
  main567 : function(){
    let isClass = $('#test > div').hasClass('main567')
    console.log(isClass,'main567')
    if(!isClass) return
    else {
      gsap.registerPlugin(ScrollTrigger);

      let sections = gsap.utils.toArray('.hrslide')
      let trigger = $('.main567 .content')
      let hrslide2 = $('.hrslide').eq(1)
      let hrslide3 = $('.hrslide').eq(2)
      let infoBox = $('.main567 .info-box')
      let tit = $('.main567 .tit')
      let end = trigger.width() - $(window).outerWidth()

      // 가로스크롤
      let hrSlide = gsap.to(sections,end,{
        xPercent : -100 * (sections.length - 1),
        ease : 'none',
        scrollTrigger : {
          trigger : trigger,
          top : "top top",
          end : `+=${end}`,
          pin : true,
          scrub : 1,
          anticipatePin : 1,
          // 스냅삭제시 투두두두둑 스크크롤
          snap : {
            snapTo:1 / (sections.length - 1),
            duration : 1,
            delay : 0,
            ease : "power1.inOut",
            inertia : false,  // rhkstjdgyrhk qlghkftjd
          },
          invalidateOnRefresh : true, // 새로고침시 가로값인식
        }
      })

      // 박스등장
    gsap.from(infoBox,{
        duration : 2,
        autoAlpha : 0,
        scrollTrigger : {
          trigger : hrslide2,
          start : "left center",
          containerAnimation : hrSlide,
          markers : false,
        }
      })

      // 게이지 충전
      let tl = gsap.fromTo('.c1',
        {
          strokeDashoffset : '300%',
          autoAlpha : 0
        },
        {
        duration : 3,
        strokeDashoffset : '60%',
        autoAlpha : 1
        }
      )

      // 시작하는 트리거
      let onlyOne = 0; // 한번만 실행하는 변수
      ScrollTrigger.create({
        animation : tl,
        containerAnimation : hrSlide,
        trigger : hrslide3,
        start : "left center",
        onEnter : () => {
          // 한번만 실행하기 싫으면 onlyOne제거 후 이거 해제
          // tl.restart(true,false)
          if(onlyOne) return;
          else{
            $({ val : 0}).animate({ val : 77}, {
              duration: 3000,
              step: function() {
                var num = test.numberWithCommas(Math.floor(this.val));
                tit.text(num + '%');
              },
              complete: function() {
                var num = test.numberWithCommas(Math.floor(this.val));
                tit.text(num + '%');
              }
            });
          }
          onlyOne = 1; // 한번만실행하기 싫으면 삭제
        }
      })
      // 초기화 트리거 계속반복하고 싶으면 onlyOne삭제 후 이거 주석해제
      ScrollTrigger.create({
        containerAnimation : hrSlide,
        trigger : hrslide3,
        start : "top bottom",
        onEnter : () => {
          tl.pause(0)
        },
      })
    }
  },
  main10 : function(){
    let isMain10 = $('#test > div').hasClass('main10')
    let trigger = $('.main10 .content')
    let tit = $('.main10 .tit')

    console.log(isMain10,'isMain10')
    if(!isMain10) return
    else {
      // 저장용 옮길것
      // 일반형
      let ani = gsap.to(".stick",{duration : 2,rotation : 180,paused : true})

      // 시작하는 트리거
      ScrollTrigger.create({
        trigger : trigger,
        start : "top 30%",
        onEnter : () => {
          ani.play()
          function numberWithCommas(x) {
            return x.toLocaleString();
          }
          $({ val : 0/*시작숫자*/ }).animate({ val : 100/*종료숫자*/ }, {
            duration: 2000,
            step: function() {
              var num = numberWithCommas(Math.floor(this.val));
              tit.text(num);
            },
            complete: function() {
              var num = numberWithCommas(Math.floor(this.val));
              tit.text(num);
            }
            // 이렇게 하면 step이 시작되고 complete가 비동기되는데 뚝! 끊기는 느낌이 들 수 있음
            // 그게 싫다면 val 종료숫자를 1올리고 complete를 삭제하자
          });
        }
      })
      // 초기화 트리거
      ScrollTrigger.create({
        trigger : trigger,
        start : "top bottom",
        onEnter : () => {
          ani.pause(0)
          tit.text(0);
        }
      })

      // 각종기능을 넣은스크롤트리거
      // gsap.to(".stick",{
      //   scrollTrigger : {
      //     trigger : ".stick",
      //     onEnter : () => {
      //     // 숫자를 3자리수마다 , 을찍어주는함수 2개
      //     //   function numberWithCommas(x) {
      //     //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      //     // }
      //     function numberWithCommas(x) {
      //       return x.toLocaleString();
      //     }
      //     // animate를 이용한 숫자 오르기 함수
      //     $({ val : 0/*시작숫자*/ }).animate({ val : 101/*종료숫자*/ }, {
      //       duration: 2000,
      //       step: function() {
      //         var num = numberWithCommas(Math.floor(this.val));
      //         $(".tit").text(num);
      //       },
      //       // complete: function() {
      //       //   var num = numberWithCommas(Math.floor(this.val));
      //       //   $(".tit").text(num);
      //       // }
      //     });
      //       console.log('onEnter')},
      //     onLeave : () => { console.log('onleave')},
      //     onEnterBack : () => { console.log('onEnterBack')},
      //     onLeaveBack : () => { console.log('onLeaveBack') },
      //   },
      //   duration : 2, rotation : 180
      // })

    }
  },
  main9 : function(){
    let isMain9 = $('#test > div').hasClass('main9')
    let trigger = $('.main9 .content')
    let bar = $(".main9 .bar")
    console.log(isMain9,"isMain9")
    if(!isMain9) return
    else {
      const main9Ani = gsap.from(bar,{height : 0,duration : 2,paused : true})
      // 시작하는 트리거
      ScrollTrigger.create({
        trigger : trigger,
        start : "top 30%",
        markers : true,
        onEnter : () => {
          main9Ani.play()
        }
      })
      // 초기화 트리거
      ScrollTrigger.create({
        trigger : trigger,
        start : "top bottom",
        markers : true,
        onEnter : () => {
          main9Ani.pause(0)
        }
      })
    }
  },
  main12 : function(){
    let isMain12 = $('#test > div').hasClass('main12')
    let innerH = $('.inner-img').height()
    let boxH = $('.main12 .content-box').height()
    let point = innerH - boxH;
    let trigger = $('.main12 ,content')
    let light = $(".main12 .light")
    console.log( isMain12,"isMain12")
    if(!isMain12) return
    else {
     const tl = gsap.to(".inner-img",{
      top : -point,
      duration : 1,
    })

    const tl2 = gsap.timeline()
    tl2
    .from(light,{
      scale : 0,
      duration : 2,
    })
    .to(light,{
      autoAlpha : 0,
      duration : .1
    })
    .to(light,{
      autoAlpha : 1,
      duration : .1
    })
    .to(light,{
      autoAlpha : 0,
      duration : .1
    })
    .to(light,{
      autoAlpha : 1,
      duration : .1
    })
    .to(light,{
      autoAlpha : 0,
      duration : .1
    })
    .to(light,{
      autoAlpha : 1,
      duration : .1
    })

      // 시작하는 트리거
      ScrollTrigger.create({
        trigger : trigger,
        start : "top 30%",
        onEnter : () => {
          tl.play()
          tl2.play()
        }
      })
      // 초기화 트리거
      ScrollTrigger.create({
        trigger : trigger,
        start : "top bottom",
        onEnter : () => {
          tl.pause(0)
          tl2.pause(0)
        }
      })
    }
  },
  main14 : function(){

    let isMain14 = $('#test > div').hasClass('main14')
    let trigger = $('.main14 .content')
    console.log(isMain14,'isMain14')
    if(!isMain14) return
    else {
      let tg = trigger.offset().top - 100
  
      $(window).scroll(function(){
        let windowH = $(window).scrollTop()
  
        if(windowH >= tg){
          trigger.find('.img-box').addClass('on')
        }
        if(windowH < tg){
          trigger.find('.img-box').removeClass('on')
        }
      })
    }
  },
  main13 : function(){
    let isMain13 = $('#test > div').hasClass('main13')
    let trigger = $('.main13 .content')
    console.log(isMain13,'isMain13')
    if(!isMain13) return
    else {

      const tl = gsap.timeline({
        defaults: {duration : .3}
      })
      tl.from(".box1",{
        scale : 0
      },.3)
      tl.from(".box2",{
        scale : 0
      },1.1)
      tl.from(".box3",{
        scale : 0
      },1.2)
      tl.from(".box4",{
        scale : 0
      },1.4)
      tl.from(".box5",{
        scale : 0
      },1.1)

      // 시작하는 트리거
      ScrollTrigger.create({
        trigger : trigger,
        start : "top 30%",
        onEnter : () => {
          tl.play()
        }
      })
      // 초기화 트리거
      ScrollTrigger.create({
        trigger : trigger,
        start : "top bottom",
        onEnter : () => {
          tl.pause(0)
        }
      })
    }
  },
  numberWithCommas : function(x){
    return x.toLocaleString();
  }
}

$(()=>{
  test.init()
})