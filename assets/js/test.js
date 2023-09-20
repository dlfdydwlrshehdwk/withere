const test = {
  init : function(){
    this.main14()
    this.main10()
    this.main9()
    this.main13()
    this.main12()
  },
  main10 : function(){
    let isMain10 = $('#test').hasClass('main10')
    if(!isMain10) return
    else {
      // 저장용 옮길것
      // 일반형
      let ani = gsap.to(".stick",{duration : 2,rotation : 180,paused : true})

      // 스크롤트리거 1회만 실행 간단한 형
      // gsap.to(".stick",{
      //   scrollTrigger : ".stick",
      //   rotation : 180,
      //   duration : 2 
      // })

      // 시작하는 트리거
      ScrollTrigger.create({
        trigger : ".content",
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
              $(".tit").text(num);
            },
            complete: function() {
              var num = numberWithCommas(Math.floor(this.val));
              $(".tit").text(num);
            }
            // 이렇게 하면 step이 시작되고 complete가 비동기되는데 뚝! 끊기는 느낌이 들 수 있음
            // 그게 싫다면 val 종료숫자를 1올리고 complete를 삭제하자
          });
        }
      })
      // 초기화 트리거
      ScrollTrigger.create({
        trigger : ".content",
        start : "top bottom",
        onEnter : () => {
          ani.pause(0)
          $(".tit").text(0);
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
    let isMain9 = $('#test').hasClass('main9')

    if(!isMain9) return
    else {
      const tl = gsap.from(".bar",{height : 0,duration : 2,paused : true})
      // 시작하는 트리거
      ScrollTrigger.create({
        trigger : ".content",
        start : "top 30%",
        onEnter : () => {
          tl.play()
        }
      })
      // 초기화 트리거
      ScrollTrigger.create({
        trigger : ".content",
        start : "top bottom",
        onEnter : () => {
          tl.pause(0)
        }
      })
    }
  },
  main12 : function(){
    let isMain12 = $('#test').hasClass('main12')
    let innerH = $('.inner-img').height()
    let boxH = $('.main12 .content-box').height()
    let point = innerH - boxH;

    if(!isMain12) return
    else {
     const tl = gsap.to(".inner-img",{
      top : -point,
      duration : 1,

    })

    const tl2 = gsap.timeline()
    tl2
    .from(".light",{
      scale : 0,
      duration : 2,
      // delay : 1
    })
    .to(".light",{
      autoAlpha : 0,
      duration : .1
    })
    .to(".light",{
      autoAlpha : 1,
      duration : .1
    })
    .to(".light",{
      autoAlpha : 0,
      duration : .1
    })
    .to(".light",{
      autoAlpha : 1,
      duration : .1
    })
    .to(".light",{
      autoAlpha : 0,
      duration : .1
    })
    .to(".light",{
      autoAlpha : 1,
      duration : .1
    })

      // 시작하는 트리거
      ScrollTrigger.create({
        trigger : ".content",
        start : "top 30%",
        onEnter : () => {
          tl.play()
          tl2.play()
        }
      })
      // 초기화 트리거
      ScrollTrigger.create({
        trigger : ".content",
        start : "top bottom",
        onEnter : () => {
          tl.pause(0)
          tl2.pause(0)
        }
      })
    }
  },
  main14 : function(){

    let isMain14 = $('#test').hasClass('main14')

    if(!isMain14) return
    else {
      let tg = $('#test .content').offset().top - 100
  
      $(window).scroll(function(){
        let windowH = $(window).scrollTop()
  
        if(windowH >= tg){
          $('.img-box').addClass('on')
        }
        if(windowH < tg){
          $('.img-box').removeClass('on')
        }
      })
    }
  },
  // temp : function(){
  //   let isClass = $('#test').hasClass('Class')

  //   if(!isClass) return
  //   else {}
  // }
  main13 : function(){
    let isMain13 = $('#test').hasClass('main13')

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
        trigger : ".content",
        start : "top 30%",
        onEnter : () => {
          tl.play()
        }
      })
      // 초기화 트리거
      ScrollTrigger.create({
        trigger : ".content",
        start : "top bottom",
        onEnter : () => {
          tl.pause(0)
        }
      })
    }
  }
}

$(()=>{
  test.init()
})