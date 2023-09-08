let ani = {
  init: function () {

    // setTimeout(()=>{
    //   ani.scrollTop();
    // },100)

    $(".scrolltop").click(function () {
      ani.scrollTop();
    });

    let width1600 = window.matchMedia('(max-width : 1600px)')
    $(window).resize(function () {
      if (width1600.matches == false) {
        $(".sub-menu").removeClass("open");
        initArrow();
        $(".gnb").removeClass("mobile");
      }
    });


    // 네비게이션 오버시
    $(".nav").hover(
      function () {
        let smenuLiHeight = $('.sub-menu li').height()
        let smenuArr = [];
        let headerwrapH = $('.headerwrap').height()
        $('.sub-menu').each(function(idx,ele){
          smenuArr.push($(this).find('li').length)
        })
        smenuArr = Math.max.apply(null,smenuArr)
        if (width1600.matches == false) {
          $(".sub-menu").css({
            height: smenuLiHeight * smenuArr + 10 + "px",
          });
          $(".headerwrap").css({
            height: smenuLiHeight * smenuArr + headerwrapH + 10 + "px",
          });
        }
      },
      // 네비게이션 오버 뗐을때
      function () {
        if (width1600.matches == false) {
          $(".sub-menu").css({
            height: "",
          });
          $(".headerwrap").css({ height: "100px" });
        }
      }
    );
    
    // 모바일기준 서브메뉴 띄우기 + 사라지기
    $(".btn-drawer").click(function () {
      $(".gnb").toggleClass("mobile");
      $(this).find('span').toggleClass('show');

      $('body').toggleClass('oh')
    });
    // 1600px 아래일때 nav 클릭함수
    $(".main-menu").click(function () {
      if(width1600.matches == true){
        initList($(this));
        siblingsInitArrow($(this));
        arrow($(this));
      }
    });
    // 화살표 위로가르키기
    function arrowUp(target) {
      target.find(".arrow").eq(0).removeClass("show");
      target.find(".arrow").eq(1).addClass("show");
    }
    // 화살표 아래로 가르키기
    function arrowDown(target) {
      target.find(".arrow").eq(1).removeClass("show");
      target.find(".arrow").eq(0).addClass("show");
    }
    // 화살표 조건에 맞게 분포한 함수
    function arrow(target) {
      if (target.find(".arrow").eq(0).hasClass("show") == true) {
        arrowUp(target);
        listDown(target);
      } else if (target.find(".arrow").eq(0).hasClass("show") == false) {
        arrowDown(target);
        listUp(target);
      }
    }
    // 리스트 아래로펼치기
    function listDown(target) {
      target.find(".sub-menu").addClass("open");
    }
    // 리스트 위로 올라오기
    function listUp(target) {
      target.find(".sub-menu").removeClass("open");
    }
    // 모든리스트 위로 올라오기
    function initList(target) {
      target.siblings().find(".sub-menu").removeClass("open");
    }
    // 누른애 빼고 모든화살표 초기화
    function siblingsInitArrow(target) {
      target.siblings().find(".arrow:odd").removeClass("show");
      target.siblings().find(".arrow:even").addClass("show");
    }
    function initArrow() {
      $(".arrow:odd").removeClass("show");
      $(".arrow:even").addClass("show");
    }

    // ko en 버튼 누를시 회색 동그라미 옮겨가기
    $(".btn-lang").click(function () {
      $(".btn-lang").removeClass("active");
      $(this).addClass("active");
    });

    // news
    // 버튼클릭하면 파란불들어오기
    ani.blueCircle("#news-container .divide > div");
    ani.blueCircle("#data_list-container .divide > div");
    ani.blueCircle("#notice_list-container .divide > div");
    ani.blueCircle("#faq_list-container .divide > div");

    // help
    // slide 열고 닫기 클래스 on주면 열림
    ani.siblingsSlide("#faq_list-container .faq-slide li")
  },
  scrollTop: function () {
    $(window).scrollTop(0);
  },
  blueCircle: function (target) {
    let tg = $(target);

    tg.click(function (e) {
      e.preventDefault();
      $(this).parent().find("div").removeClass("active");
      $(this).addClass("active");
    });
  },
  siblingsSlide : function(target){
    $(target).click(function () {
      let li = $(target);
      let allListOn = li.hasClass("on");
      let thisOn = $(this).hasClass("on");
      if (allListOn) {
        li.removeClass("on");
        $(this).addClass("on");
      } else {
        $(this).addClass("on");
      }
      if (thisOn) {
        $(this).toggleClass("on");
      }
    });
  },
};

$(function () {
  ani.init();
});
