$(()=>{
    // 가로스크롤
    let ex = gsap.timeline({ // 타임라인에 추가할 수 있다!
        scrollTrigger: {
          trigger: ".news", // trigger 대상
          pin: true, // trigger 고정 스티키기능 - 가로스크롤할거면 필수
          start: "top top", // trigger가 viewport 상단에 닿을때 시작
          end: "+=1500", // 시작지점에서 500px를 스크롤한 후 끝
          scrub: true, // 애니메이션 부드럽게 진행
        //   snap: {
        //     snapTo: "labels", // 타임라인에서 가장 가까운 라벨에 스냅
        //     duration: {min: 0.2, max: 3}, // 최소 0.2 최대 3초 동안
        //     delay: 0.2, // 스냅을 하기 전 0.2초동안 지연
        //     ease: "power1.inOut" // 변화속도
        //   }
        }
      }).to(".news-target",{
        left : '-40%'
      });
})