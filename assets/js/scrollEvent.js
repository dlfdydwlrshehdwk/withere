let scrollEvent = {
  init: function () {
    


    let windW = $(window).width()
    let winSW = window.screen.width;
    let targetW = $('.news-target').width()/100 * 40
    let end = targetW - ( windW - winSW)
    
    
    
    // let timer;
    // function resizeDone(){
    // }
    // $(window).on('scroll',function(){
    //   clearTimeout(timer);
    //   timer = setTimeout(resizeDone , 150)
    // })




    scrollEvent.scrollTopBtn();
    scrollEvent.gsapAni();
    scrollEvent.horizontalScroll(end);

  },

  horizontalScroll: function (end) {
    
      gsap.registerPlugin(ScrollTrigger);
      // 가로스크롤 되게하기
      ScrollTrigger.matchMedia({
        // 반응형 768넘어가면 이벤트먹게
        "(min-width : 768px)": function () {
          let ex = gsap
            .timeline({
              // 타임라인에 추가할 수 있다!
              scrollTrigger: {
                trigger: ".news", // trigger 대상
                pin: true, // trigger 고정 스티키기능 - 가로스크롤할거면 필수
                anticipatePin : 1,
                start: "top top", // trigger가 viewport 상단에 닿을때 시작
                end: "+=1500", // 시작지점에서 500px를 스크롤한 후 끝
                scrub: 1, // 애니메이션 부드럽게 진행
              },
            })
            .to(".news-target", {
              left: - end + "px",
            });
        },
      });
  },
  gsapAni: function () {
    // startbanner 부분 가운데 텍스트박스가 스크롤에 맞춰 올라오게 설정
    let ex2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".startbanner",
        // pin : true, // 활성상태에서 트리거 요소 고정
        duration: 10000,
        start: "-=200", // 트리거 상단이 뷰포트 상단에 닿을 때
        end: "+=300", // 시작부분에서 x px 까지 스크롤 한 후 종료
        scrub: 1, // 부드러운 스크러빙, 스크롤바를 잡는데 1초가 걸린다.
      },
    });
    ex2.from(".startbanner-txtbx", { y: 100, opacity: 0, duration: 1 });
  },
  scrollTopBtn: function () {
    let windowH = $(window).scrollTop();
    let scrolltopbtn = $(".scrolltop");
    let wrapH = $("#wrap").height();
    let footerH = $(".footer").innerHeight();
    let target_scrolltop = wrapH - footerH - $(window).height();
    if (windowH > target_scrolltop) {
      scrolltopbtn.css({
        transition: ".3s",
        bottom: footerH + 30 + "px",
      });
    } else {
      $(".scrolltop").css({
        transition: ".3s",
        bottom: "5%",
      });
    }
    if (windowH > $(window).height()) {
      $(".scrolltop").css({ display: "flex" });
      scrolltopon();
    } else {
      scrolltopoff();
      $(".scrolltop").css({ display: "none" });
    }
    function scrolltopon() {
      $(".scrolltop").stop().animate({ opacity: 1 }, 100);
    }
    function scrolltopoff() {
      $(".scrolltop").stop().animate({ opacity: 0 }, 100);
    }
  },
};

$(() => {
  scrollEvent.init();
});
