$(()=>{

  gsap.registerPlugin(ScrollTrigger);

    // 가로스크롤 되게하기
    let ex = gsap.timeline({ // 타임라인에 추가할 수 있다!
        scrollTrigger: {
          trigger: ".news", // trigger 대상
          pin: true, // trigger 고정 스티키기능 - 가로스크롤할거면 필수
          start: "top top", // trigger가 viewport 상단에 닿을때 시작
          end: "+=1500", // 시작지점에서 500px를 스크롤한 후 끝
          scrub: 1, // 애니메이션 부드럽게 진행
        }
      }).to(".news-target",{
        left : '-40%'
      });

      // startbanner 부분 가운데 텍스트박스가 스크롤에 맞춰 올라오게 설정
      let ex2 = gsap.timeline({
        scrollTrigger:{
          trigger : ".startbanner",
          // pin : true, // 활성상태에서 트리거 요소 고정
          duration : 10000,
          start : "-=100", // 트리거 상단이 뷰포트 상단에 닿을 때
          end : "+=200", // 시작부분에서 x px 까지 스크롤 한 후 종료
          scrub : 1, // 부드러운 스크러빙, 스크롤바를 잡는데 1초가 걸린다.
        }
      })

      ex2.from(".startbanner-txtbx", {  y: 100, opacity : 0 ,duration : 1})

})