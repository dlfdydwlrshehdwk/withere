let common = {
  // gnb 길이 넣어줄 배열 생성
  gnbArr: [],

  init: function () {
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener("resize", () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });

    // gnb 초기 실행
    common.gnbFnc();
  },

  // gnb
  gnbFnc: function () {

    // 모바일 drawer 버튼 제어 
    // 밖으로 빼냈음 resize안에 넣으면 실행이 너무많이되서
    // 버벅거려서 열리지않는경우 빈번
    $(".btn-drawer").on("click", function () {
      $(this).toggleClass("active");
      $(".gnb").toggleClass("close");

      if($('body').css("overflow") !== 'hidden') 
      $('body').css({overflow : 'hidden'});
      else if ($('body').css("overflow") == 'hidden') 
      $('body').css({overflow : 'visible'});
    });

    // resize 안에 있어서 pc -> mo 전환시 버벅거려서 
    // 밖으로 따로 빼내고 조건을 안에걸음
    $('.nav-toggle').click(function(e){
      
      let isMobile = matchMedia("screen and (max-width : 1023px)").matches
      let subDisplay = $(this).next().css("display")
      if(isMobile){
        if(subDisplay == 'block') {
          $('.sub-menu').slideUp("fast")
          $('.main-menu').removeClass("fold");
        }
        else {
          $('.sub-menu').slideUp("fast")
          $('.main-menu').removeClass("fold");
          $(this).next().slideToggle("fast")
          $(this).parent().addClass("fold");
        }
      }
      // 태그 내에 링크 없을 시 이벤트 막기
      if (!$(this).attr("href") || $(this).attr("href") == "#") {
        e.preventDefault();
      }
    })
    

		// 윈도우 리사이징 할때마다 체크
    $(window).on("resize.gnb-menu", function () {

			// 서브 메뉴들의 길이를 배열에 담음
      $(".nav > .main-menu").find(".sub-menu").each(function () {
				common.gnbArr.push($(this).outerHeight());
			});

      // 모바일 사이즈 일때
      if (matchMedia("screen and (max-width: 1023px)").matches) {
        console.log('mobile')
        // 모바일일때 높이값 초기화
				$(".sub-bg, .sub-menu").css("height", "auto");
				// 모바일 시 기본 닫혀있는 클래스 추가
        $(".gnb").addClass("close");
        $('.btn-drawer').removeClass('active')
        $(".nav-toggle").next().slideUp("fast");
        $(".nav-toggle").parent().removeClass("fold");
        // 모바일 시 mouseenter, leave 되는거 차단
        $(".nav > .main-menu").off("mouseenter")
        $(".nav > .main-menu").off("mouseleave")

      }  else {
        console.log('pc')
				// pc일때 모바일 기본 숨김 클래스 제거
        $(".gnb").removeClass("close");
				
				// pc 일때 마우스 호버 제어
        $(".nav > .main-menu").each(function () {
          $(this).on("mouseenter", function () {
						$(".sub-bg").addClass("on");
						$(".gnb").addClass("hover");
            $('.sub-menu').show()
					})
					.on("mouseleave", function () {
						$(".sub-bg").removeClass("on");
						$(".gnb").removeClass("hover");
            $('.sub-menu').hide()
					});
        });
				// pc일때 서브 메뉴중 가장 긴 높이로 맞춰 줌
        $(".sub-bg, .sub-menu").css("height", Math.max.apply(null, common.gnbArr));
      }
    });

		// 리사이징 초기 실행 트리거
    $(window).trigger("resize.gnb-menu");

		// 스크롤시 쉐도우 처리
		$(window).on("scroll resize", function () {
			var wt = $(window).scrollTop();

			if (wt > 100) {
				$("#header").addClass("scroll");
			} else {
				$("#header").removeClass("scroll");
			}

		});

		$(window).trigger("scroll");
  },

  // 모달 팝업 띄우기
  openModalPopup: function (tar) {
    let _tar = $("." + tar);

    $("body").append("<div class='modal'>");
    $("body").addClass("oh");
    // $("body").css("position", "absolute").css("overflow", "hidden");
    $(".modal").show();

    _tar.show();
  },

  // 모달 팝업 닫기
  closeModalPopup: function () {
    $(".modal").remove();
    // $("body").css("position", "relative").css({overflowX : 'hidden',overflowY : 'auto'});
    $(".popup").hide();
    if (!window.matchMedia("(max-width : 1600px)").matches) {
      console.log("dd");
      $("body").removeClass("oh");
    } else {
      if ($("body").hasClass("oh")) {
        return;
      } else {
        $("body").removeClass("oh");
      }
    }
  },
};

$(function () {
  common.init();
});
